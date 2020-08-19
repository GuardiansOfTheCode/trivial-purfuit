import {Category} from '../src/clientInterfaces';

// This is the seed for the database
// correct key is made optional but that is only for wrong answers
// correct answers should be set to true

// Differs from the interfaces in clientInterfaces only by optional fields
// since its for seeding the database
export interface _QuestionCard {
    id?: number
    category: Category
    question: string,
    answers: _Choices[]
}

export interface _Choices {
    id?: number
    answer: string
    correct?: boolean //should be set true for correct answers
    questionId?: number,
}

export const questionAnswersData: _QuestionCard[] = [
    {
        category: Category.WHITE,
        question: 'On what day in 1776 did the Continental Congress declare its freedom from Britain?',
        answers: [
            {
                answer: 'June 4'
            },
            {
                answer: 'June 30'
            },
            {
                answer: 'July 4'
            },
            {
                answer: 'July 2',
                correct: true
            }
        ]
    },
    {
        category: Category.BLUE,
        question: 'Which colony rioted when news of the Declaration spread?',
        answers: [
            {
                answer: 'Virginia'
            },
            {
                answer: 'Maryland'
            },
            {
                answer: 'New York',
                correct: true
            },
            {
                answer: 'Delaware'
            }
        ]
    },
    {
        category: Category.RED,
        question: 'Who was the oldest signer of the Declaration of Independence?',
        answers: [
            {
                answer: 'John Witherspoon'
            },
            {
                answer: 'Benjamin Franklin',
                correct: true
            },
            {
                answer: 'Samuel Adams'
            },
            {
                answer: 'Benjamin Harrison'
            }
        ]
    },
    {
        category: Category.GREEN,
        question: ' Which special event overlapped with the Centennial celebration of Independence Day?',
        answers: [
            {
                answer: 'World’s Fair in Philadelphia',
                correct: true
            },
            {
                answer: 'The Gettysburg Address'
            },
            {
                answer: 'The first US telephone call'
            },
            {
                answer: 'A presidential assassination'
            }
        ]
    }
];
