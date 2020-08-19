export class Question {
    category: number;
    question: string;

    constructor(category: number = 0,
                question: string = '') {
        this.category = category;
        this.question = question;
    }
}
