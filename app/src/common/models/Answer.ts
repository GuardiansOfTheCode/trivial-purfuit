export class Answer {
    answer: string;
    correct: boolean;

    constructor(answer: string = '',
                correct: boolean = false) {
        this.answer = answer;
        this.correct = correct;
    }
}
