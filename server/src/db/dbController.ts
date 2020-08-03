import { Request, Response} from 'express'
import { knex, RefreshTables } from './db'
import { tableQuestions, tableAnswers} from './dbConfig'
import { QuestionCard, Category, Choices } from  '../clientInterfaces' // questionInterfaces
import { Question, Answer } from './dbTypes'


const log = (msg: any) => {
   return console.log(msg)
}
 
//Create empty array for each category
let usedCards: number[][] = [...Array(Category.END_CATEGORY)].map(e => Array(0))

const GetUnusedCard = (category: Category, cards: Question[]): Question => 
{   
   log("---------------------") 
   log("GetUnusedCard")
   let gotNewId:boolean = false
   let newCardIdx: number = 0

   const predicate = (lhs:number, rhs:number) => {
      //console.log("comp " + lhs + "<->" + rhs)
      return lhs === rhs   
   }

   //console.log("There are "+ cards.length + " ids" )

   let query: number[] = usedCards[category]
   for(let i = 0; !gotNewId && i !== cards.length; ++i)
   {  
      if( query.find(x => predicate(x, cards[i].id)) === undefined )
      {         
         gotNewId = true
         newCardIdx = i
         //console.log("got new id of => " + cards[i]?.id)
      }      
   }

   if(!gotNewId)
   {
      //console.log("no new id")
      usedCards[category] = [] //go back to first card/id, use global value not local queired
      newCardIdx = 0;
   }

   usedCards[category].push( cards[newCardIdx].id )
   return  (cards.length > 0) ? cards[newCardIdx] : new Question()
}

export const GetQuestionCard = async(req: Request, res: Response) => 
{
   log("---------------------")
   log("GetQuestionCard")
   let valid: boolean = true
   let category:Category = (Object.keys(req.body).length !== 0) ? req.body.category : 
      (Object.keys(req.query).length !== 0) ? req.query.category : 
      valid = false 

   if(!valid) 
   {
      res.status(500).json({ message: "Did not find category key in body or query"})
      return
   }

   knex(tableQuestions)
   .where({
      category: category
   })
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

const GetAnswers = async (key: number) : Promise<void> =>
{
   return knex(tableAnswers).where({
      questionId: key
   })
   .then( (rows: Answer[])=>{      
      return rows
   })
   .catch( (err:any)=> {
      console.log("Failed to GetAnswers " + err)
      throw err 
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
         res.status(500).json({mesage: `Failed to remove rows: ${err}`})})
   })   
   .catch( (err: any)=> res.status(500).json({mesage: `General failure ${err}`}) )
}

export const UpdateCard = async (req: Request, res: Response) =>
{   
   log("---------------")
   log("UpodateCard")
   let card: QuestionCard = req.body
   knex.transaction( (trx:any) =>{
      return trx(tableQuestions)
         .where({ id: card.id})
         .update({
            category: card.category,
            question: card.question
         })
         .then( async ()=>
         {
            for(let i = 0; i < card.answers.length; ++i)            
            {
               let anAnswer: Choices = card.answers[i]             
               await trx(tableAnswers)
               .where({id: anAnswer.id})
               .update({
                  answer: anAnswer.answer,
                  correct: anAnswer.correct
               })
            }
         })
   })
   .then( ()=>{
      res.status(200).json({message: "Question card upated"})
   })
   .catch((err:any) => res.status(500).json({message: `General failure ${err}`}) )
}