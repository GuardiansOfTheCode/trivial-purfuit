export class Question {
    id: number;
    category: number;
    question: string;

    constructor(id: number = 0, category: number = 0, question: string = '') {
        this.id = id;
        this.category = category;
        this.question = question;
    }
}

export class Answer {
    id: number;
    answer: string;
    correct: boolean;
    questionId: number;

    constructor(id: number = 0, answer: string = '', correct: boolean = false, questionId: number = 0) {
        this.id = id;
        this.answer = answer;
        this.correct = correct;
        this.questionId = questionId;
    }
}
