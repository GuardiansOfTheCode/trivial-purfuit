import {Category} from '../src/clientInterfaces'

// This is the seed for the database
// correct key is made optional but that is only for wrong answers
// correct answers should be set to true

// Differs from the interfaces in clientInterfaces only by optional fields 
// since its for seeding the database
export interface _QuestionCard
{   
   id?: number
   category: Category
   question: string,
   answers: _Choices[]
}

export interface _Choices
{   
   id?: number
   answer: string
   correct?: boolean //should be set true for correct answers
   questionId?: number,
}

export const questionAnswersData:_QuestionCard[] = [ 
   {
      category: Category.BLUE,
      question: "What is your name?",
      answers: [
         {
            answer: "Henry",
            correct: true
         },
         {
            answer: "Bill"
         }
      ]
   },
   {
      category: Category.BLUE,
      question: "What is your hobby?",
      answers: [
         {
            answer: "Dancing",
            correct: true
         },
         {
            answer: "Singing",
         }
      ]
   },
   {
      category: Category.RED,
      question: "What is your favorite food?",
      answers: [
         {
            answer: "Crabs",
            correct: true
         },
         {
            answer: "Burgers"
         }
      ]
   },
   {
      category: Category.RED,
      question: "What is your favorite soda?",
      answers: [
         {
            answer: "coke",
            correct: true
         },
         {
            answer: "pepsi",
         }
      ]
   },
   {
      category: Category.GREEN,
      question: "Is this cool?",
      answers: [
         {
            answer: "yes",
            correct: true
         },
         {
            answer: "no",
            correct: false
         }
      ]
   },
   {
      category: Category.GREEN,
      question: "How fun is this?",
      answers: [
         {
            answer: "fun",
            correct: true
         },
         {
            answer: "barely",
         }
      ]
   },

]