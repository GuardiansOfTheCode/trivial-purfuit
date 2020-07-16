import {QuestionDao} from '../dao/QuestionDao';

export class QuestionService {
    private static _instance: QuestionService = new QuestionService();
    private _questionDao: QuestionDao = QuestionDao.instance;

    constructor() {
        if (QuestionService._instance) {
            throw new Error('Instantiation failed: Use QuestionService.instance instead of \'new\'.');
        }
        QuestionService._instance = this;
    }

    static get instance(): QuestionService {
        return this._instance;
    }

    static set instance(value: QuestionService) {
        this._instance = value;
    }

    get questionDao(): QuestionDao {
        return this._questionDao;
    }
}
