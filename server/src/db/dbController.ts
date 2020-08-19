import { Request, Response} from 'express'
import { knex, RefreshTables } from './db'
import { tableQuestions, tableAnswers} from './dbConfig'
import { QuestionCard, Category, Choices } from  '../clientInterfaces' // questionInterfaces
import { Question, Answer } from './dbTypes'


const log = (msg: any) => {
   return console.log(msg)
}

//Create empty array for each category
let usedCardIds: number[][] = [...Array(Category.END_CATEGORY)].map(e => Array(0))
let tmp: number[] = []

const GetUnusedCard = (category: Category, cards: Question[]): Question =>
{
   log("---------------------")
   log("GetUnusedCard")

   let ids: number[] = usedCardIds[category]

   // remove used cards
   let cardsToPickFrom: Question[] = cards.filter( (card: Question) => ids.includes(card.id) == false)

   if(cardsToPickFrom.length === 0)
   {
      cardsToPickFrom = cards //all used so select from the used
      usedCardIds[category] = [] // and empty records to start over
   }

   let randIdx: number = Math.floor( Math.random() * (cardsToPickFrom.length - 1))

   let selectedCard: Question = cardsToPickFrom[randIdx]

   usedCardIds[category].push( selectedCard.id )
   return selectedCard
}

export const GetQuestionCard = async(req: Request, res: Response) =>
{
   log("---------------------")
   log("GetQuestionCard")
   let valid: boolean = true

   // check if there are valid parameters
   let category:Category = (Object.keys(req.body).length !== 0) ? req.body.category :
      (Object.keys(req.query).length !== 0) ? req.query.category :
      valid = false

   if(!valid)
   {
      res.status(500).json({ message: "Did not find category key in body or query"})
      return
   }

   knex(tableQuestions).where({ category: category })
      .then( (rows: Question[])=>{
         if(rows.length > 0)
         {
            let card: Question = GetUnusedCard(rows[0].category, rows)
            let tmp:QuestionCard =
               { id: card.id, category: card.category, question: card.question, answers: [] }
            GetAnswers(card.id)
               .then( (data: any) => {
                  tmp.answers = data
                  res.json(tmp)
               })
               .catch( (err: any)=> {
                  res.status(500).json({message: `Failed to retrieve question answers: ${err}`})
               })
         }
         else
         {
            log("No rows retrieved of the category")
            res.status(500).json()
         }
      })
      .catch( (err: any) => {
         res.status(500).json({message: `General failure retrieving a Question card: ${err}`})
      })
}

const GetAnswers = async (questionId: number) : Promise<any> =>
{
   return knex(tableAnswers).where({questionId: questionId })
      .then( (rows: Answer[])=>{
         return rows
      })
}

export const GetAllQuestionCards = async (req: Request, res: Response) =>
{
   console.log("---------------------")
   console.log("GetAllQuestionCards")
   let qa: QuestionCard[] = []

   try{
      const cards: Question[] = await knex(tableQuestions).select()

      for( let i:number = 0; i < cards.length; ++i)
      {
         let card = cards[i]
         let result:Answer[] = await knex(tableAnswers)
            .select(
               'Answers.id',
               'Answers.answer',
               'Answers.correct',)
            .where({ questionId: card.id })

         let tmp: QuestionCard = { id: card.id, category: card.category, question: card.question, answers: result}
         qa.push(tmp)
      }

      res.status(200).json(qa)
   }
   catch (err){
      console.log("GetAllQuestions failed: "+ err)
      res.status(500).json({message: `Could not retrieve all question and answers: ${err}`})
   }
}

export const AddQuestionCards = async (req: Request, res: Response) =>
{
   console.log("---------------------")
   console.log("AddQuestionCard")
   if( !Array.isArray(req.body) || req.body.length === 0) {
      console.log("Bad request", req.body)
      res.status(400).json( { message: "Body should have array of question IDs"} )
   }
   else
   {
      let cards: QuestionCard[] = req.body
      try{
         for( let i: number = 0; i < cards.length; ++i){
            let card = cards[i]
            await knex.transaction( (trx:any )=>{
               return trx(tableQuestions).insert( {category: card.category, question: card.question})
               .then((ids: number[]) => {
                  card.answers.forEach( choice => choice.questionId = ids[0])
                  return trx(tableAnswers).insert(card.answers)
                     .then(()=> console.log(`Added answers for question "${card.question}"`))
               })
            })
         }

         // await GetTableContents(tableQuestions) //for debugging
         // await GetTableContents(tableAnswers)  //for debugging
         res.status(200).json({message: `${cards.length} Question card(s) added`})
      }
      catch(err){
         res.status(500).json({message: `Failed to add Question card: ${err}`})
      }
   }
}

export const ResetTables = async (req: Request, res: Response) =>
{
   console.log("---------------------")
   RefreshTables()
      .then( ()=> {
         res.json({ message: "Tables reset"})
      })
      .catch( (err: any)=> {
         res.status(500).json({message: `Failed to reset tables: ${err}`})
      })
}

export const RemoveCards = async (req: Request, res: Response) =>
{
   if( !Array.isArray(req.body) || req.body.length === 0) {
      console.log("Bad request", req.body)
      res.status(400).json( { message: "Body should have array of question IDs"} )
      return
   }

   console.log("---------------------")
   let ids: number[] = req.body

   knex(tableQuestions).where( (builder: any) =>{
      builder.whereIn('id', ids)
         .del().from(tableQuestions)
         .then( (rows:any)=> {
            res.json({message: `Removed ${rows} row(s)` })
         })
         .catch((err:any) => {
         res.status(500).json({message: `Failed to remove rows: ${err}`})})
   })
   .catch( (err: any)=> res.status(500).json({message: `General failure ${err}`}) )
}

export const UpdateCard = async (req: Request, res: Response) =>
{
   log("---------------")
   log("UpdateCard")
   let card: QuestionCard = req.body
   knex.transaction( (trx:any) =>{
      return trx(tableQuestions)
         .where({ id: card.id})
         .update({
            category: card.category,
            question: card.question
         })
         .then( ()=>
         {
            let promises: Promise<any>[] = []
            card.answers.forEach( (anAnswer: Choices) => {
               promises.push(
                  trx(tableAnswers)
                  .where({id: anAnswer.id})
                  .update({
                     answer: anAnswer.answer,
                     correct: anAnswer.correct
                  })
               )
            })
            return Promise.all(promises)
               .then( ()=>{
                  res.status(200).json({message: "Question card updated"})
               })
         })
   })
   .catch((err:any) => res.status(500).json({message: `General failure ${err}`}) )
}
