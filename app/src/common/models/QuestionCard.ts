import {Answer} from './Answer';
import {Question} from './Question';

export class QuestionCard {
    public question: Question;
    public answers: Answer[];

    constructor(question: Question, answers: Answer[]) {
        this.question = question;
        this.answers = answers;
    }
}
