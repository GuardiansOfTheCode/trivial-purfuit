import {QuestionDao} from '../dao/QuestionDao';
import {Question} from '../models/Question';

export class QuestionService {
    private questionDao: QuestionDao = QuestionDao.instance;

    constructor() {
        if (QuestionService._instance) {
            throw new Error('Instantiation failed: Use QuestionService.instance instead of \'new\'.');
        }
        QuestionService._instance = this;
    }

    private static _instance: QuestionService = new QuestionService();

    static get instance(): QuestionService {
        return this._instance;
    }

    static set instance(value: QuestionService) {
        this._instance = value;
    }

    // TODO: Remove/edit after skeletal increment demo
    public insertQuestion(question: Question) {
        console.log(`[QuestionService] insertQuestion(${JSON.stringify(question)})`);
        this.questionDao.insert(question);
    }
}
