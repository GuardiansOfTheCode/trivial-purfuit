// Import path module
import path from 'path'
import {dbName, tableQuestions, tableAnswers} from './dbConfig'
import '../../seeds/trivia'
import { _QuestionCard, questionAnswersData } from '../../seeds/trivia'

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, dbName)

// Create connection to SQLite database
const config = {
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  migrations: {
    directory: "./migrations",
    tableName: "trivia_migrations",
    extension: 'js'
  },
  useNullAsDefault: true
}

export const knex = require('knex')(config)

const logDbIf = (text: string, DEBUG: boolean = false) => { if(DEBUG === true) console.log("DB: "+ text)}

export const logDb = (text: string) => console.log("DB: "+ text)

const questionsSchema = (table:any) =>
{
   table.increments('id').primary()   
   table.integer('category').unsigned()
   table.string('question')
}

const answersSchema = (table:any ) =>
{
   table.increments('id').primary()
   table.string('answer')
   table.boolean('correct')
   table.integer('questionId').references('id').inTable(tableQuestions)
      .onUpdate('CASCADE') // if Article primary key is changed, update this foreign key.
      .onDelete('CASCADE') // if referenced Article is deleted, delete this Comment.
}

const createTable = (tableName: string, schemaCallback: any , clean: boolean = false) : Promise<void>=>
{
   console.log("Creating table "+tableName)

   return knex.schema.hasTable(tableName)
   .then( ()=> {
      if(clean) 
         return knex.schema.dropTableIfExists(tableName)
      else
         return new Promise<void>( (func) => func())
   })
   .then( ()=> {
      return knex.schema.createTable(tableName, (table: any)  => schemaCallback(table) )
         .then(() => {
            // Log success message
            logDbIf(`Table ${tableName} created`)
         })
         .catch((error: any) => {
            logDbIf(`There was an error creating table: ${error}`)
         })
         .then(() => {
            // Log success message
            //console.log('done')
         })
         .catch((error: any) => {
            logDbIf(`There was an error setting up the database: ${error}`)
         })
      })
}

const MakeSeed = (tableData:_QuestionCard[]): Promise<void> =>
{
   logDbIf("Making seed")
   return knex.schema.hasTable(tableQuestions)
   .then( (exists: boolean)=> {
      if(exists)
         return knex(tableQuestions).del() //tableAnswers will also empty
   })
   .then(()=>{      
      tableData.forEach(card => {
         logDbIf("Adding card " + card.question)

         return knex.transaction( (trx:any )=>{
            return trx(tableQuestions).insert( {category: card.category, question: card.question})
            .then((ids: number[]) => {
               card.answers.forEach( choice => {
                  choice.questionId = ids[0]
                  if(choice.correct === undefined) choice.correct = false //set undefined answer as wrong
               })
               return trx(tableAnswers).insert(card.answers)
                  .then(()=> logDbIf(`Added answers for question "${card.question}"`))
            })
         })
         .catch((error:any) => {
            // If we get here, that means that neither the 'Old Books' catalogues insert,
            // nor any of the books inserts will have taken place.
            console.error(error);
         });
      })
   })
} 

export const RefreshTables = () => MakeSeed(questionAnswersData)

export const GetTableContents = async (tableName: string) =>  {   
   return knex.select('*').from(tableName)
      .then( (data: any) => {
         logDb(`Showing contents of ${tableName}`)
         console.log('data:', data)
         console.log('---------------------------')
      })         
      .catch( (err: any) => console.log(err))
}

createTable(tableQuestions, questionsSchema, true)
   .then( ()=> createTable(tableAnswers, answersSchema, true) )
   .then( ()=> MakeSeed(questionAnswersData) )
   //.then( ()=> GetTableContents(tableAnswers)) //for debugging
   //.then( ()=> GetTableContents(tableQuestions)) //for debugging
   .catch( (err: any) => console.log(err) )