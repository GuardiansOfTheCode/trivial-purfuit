export class Question {
    constructor(question: string, correctAnswer: string, incorrectAnswers: string) {
        this._question = question;
        this._correctAnswer = correctAnswer;
        this._incorrectAnswers = incorrectAnswers;
    }

    private _question: string;

    get question(): string {
        return this._question;
    }

    set question(value: string) {
        this._question = value;
    }

    private _correctAnswer: string;

    get correctAnswer(): string {
        return this._correctAnswer;
    }

    set correctAnswer(value: string) {
        this._correctAnswer = value;
    }

    private _incorrectAnswers: string;

    get incorrectAnswers(): string {
        return this._incorrectAnswers;
    }

    set incorrectAnswers(value: string) {
        this._incorrectAnswers = value;
    }
}
