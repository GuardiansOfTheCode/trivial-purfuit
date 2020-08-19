export interface QuestionCard {
    id: number
    category: Category
    question: string,
    answers: Choices[]
}

export interface Choices {
    id: number
    answer: string
    correct: boolean //should be set when needed to be true
    questionId?: number,
}

export enum Category {
    RED,
    BLUE,
    GREEN,
    WHITE,
    END_CATEGORY
}
