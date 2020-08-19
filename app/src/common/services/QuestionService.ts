import axios, {AxiosResponse} from 'axios';
import {QuestionCard} from '../models/QuestionCard';

export class QuestionService {
    private static _instance: QuestionService = new QuestionService();
    private static BASE_URL = 'http://localhost:4001/trivia';

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

    public async fetchAllQuestionCards(): Promise<AxiosResponse> {
        return await axios.get(QuestionService.BASE_URL + '/all');
    }

    public async fetchRandomQuestionCardByCategory(value: number): Promise<AxiosResponse> {
        return await axios.get(QuestionService.BASE_URL + '/card', {params: {category: value}});
    }

    public async addQuestionCards(questionCards: QuestionCard[]): Promise<AxiosResponse> {
        const request: any = [];
        questionCards.forEach(questionCard => {
            const card: any = {};
            card.category = questionCard.question.category;
            card.question = questionCard.question.question;
            card.answers = [];

            questionCard.answers.forEach(answer => {
                card.answers.push({
                    'answer': answer.answer,
                    'correct': answer.correct
                })
            });

            request.push(card);
        });

        return await axios.post(QuestionService.BASE_URL + '/cards', request);
    }

    /* Does not work properly, need to change how db service works.
       Currently it requires knowing the ids of each answer.
       Not impossible to implement, just not worth the time right now. */
    public async updateQuestionCard(id: number, questionCard: QuestionCard): Promise<AxiosResponse> {
        await this.addQuestionCards([questionCard]);
        return await this.deleteQuestionCardById(id);

        // let answers = [];
        //
        // for (let i = 0; i < questionCard.answers.length; i++) {
        //     answers.push({
        //         id: i,
        //         answer: questionCard.answers[i].answer,
        //         correct: questionCard.answers[i].correct ? 1 : 0
        //     });
        // }
        //
        // const request = {
        //     id: id,
        //     question: questionCard.question.question,
        //     answers: answers
        // }
        //
        // return await axios.put(QuestionService.BASE_URL + '/card', request);
    }

    public async deleteQuestionCardById(id: number): Promise<AxiosResponse> {
        return await axios.delete(QuestionService.BASE_URL + '/delete', {data: [id]});
    }

    public async resetQuestionDatabaseTables(): Promise<AxiosResponse> {
        return await axios.put(QuestionService.BASE_URL + '/reset');
    }
}
