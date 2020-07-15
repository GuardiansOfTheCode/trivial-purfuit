import {Question} from '../models/Question';

export class QuestionDao {
    constructor() {
        if (QuestionDao._instance) {
            throw new Error('Instantiation failed: Use QuestionDao.instance instead of \'new\'.');
        }
        QuestionDao._instance = this;
    }

    private static _instance: QuestionDao = new QuestionDao();

    static get instance(): QuestionDao {
        return this._instance;
    }

    static set instance(value: QuestionDao) {
        this._instance = value;
    }

    // TODO: Remove/edit after skeletal increment demo
    private _demoDB: Question[] = [];

    // TODO: Remove/edit after skeletal increment demo
    get demoDB(): Question[] {
        return this._demoDB;
    }

    // TODO: Remove/edit after skeletal increment demo
    insert(question: Question) {
        console.log(`[QuestionDao] insert(${JSON.stringify(question)})`);
        this._demoDB.push(question);
    }
}
