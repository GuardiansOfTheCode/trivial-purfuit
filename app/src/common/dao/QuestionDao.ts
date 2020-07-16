export class QuestionDao {
    private static _instance: QuestionDao = new QuestionDao();

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
}
