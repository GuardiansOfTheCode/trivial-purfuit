export class Question {
    private _question: string;
    private _correctAnswer: string;
    private _incorrectAnswers: string;

    constructor(question: string, correctAnswer: string, incorrectAnswers: string) {
        this._question = question;
        this._correctAnswer = correctAnswer;
        this._incorrectAnswers = incorrectAnswers;
    }

    get question(): string {
        return this._question;
    }

    set question(value: string) {
        this._question = value;
    }

    get correctAnswer(): string {
        return this._correctAnswer;
    }

    set correctAnswer(value: string) {
        this._correctAnswer = value;
    }

    get incorrectAnswers(): string {
        return this._incorrectAnswers;
    }

    set incorrectAnswers(value: string) {
        this._incorrectAnswers = value;
    }
}
