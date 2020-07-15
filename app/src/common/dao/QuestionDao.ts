import {Question} from '../models/Question';

export class QuestionDao {
    private static _instance: QuestionDao = new QuestionDao();
    // TODO: Remove/edit after skeletal increment demo
    private _demoDB: Question[] = [];

    constructor() {
        if (QuestionDao._instance) {
            throw new Error('Instantiation failed: Use QuestionDao.instance instead of \'new\'.');
        }
        QuestionDao._instance = this;
    }

    static get instance(): QuestionDao {
        return this._instance;
    }

    static set instance(value: QuestionDao) {
        this._instance = value;
    }

    // TODO: Remove/edit after skeletal increment demo
    get demoDB(): Question[] {
        return this._demoDB;
    }

    // TODO: Remove/edit after skeletal increment demo
    insert(question: Question) {
        console.log(`[QuestionDao] insert(${JSON.stringify(question)})`);
        this._demoDB.push(question);
    }

    // TODO: Remove/edit after skeletal increment demo
    delete() {
        console.log(`[QuestionDao] delete()`);
        this._demoDB.pop();
    }

    // TODO: Remove/edit after skeletal increment demo
    printDemoDB(): void {
        console.log(`[QuestionDao] printDemoDB: SIZE ${this._demoDB.length} CONTENTS ${JSON.stringify(this._demoDB)}`);
    }

    // TODO: Remove/edit after skeletal increment demo
    getFirstItem(): Question {
        const firstItem: Question = this._demoDB[0];
        console.log(`[QuestionDao] getFirstItem(): ${JSON.stringify(firstItem)}`);
        return firstItem;
    }
}
