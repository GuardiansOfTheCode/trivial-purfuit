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

    public async updateQuestionCard(id: number, questionCard: QuestionCard): Promise<AxiosResponse> {
        const request: any = {...questionCard};
        request.id = id;

        return await axios.put(QuestionService.BASE_URL + '/card', request);
    }

    public async deleteQuestionCardById(id: number): Promise<AxiosResponse> {
        return await axios.delete(QuestionService.BASE_URL + '/delete', {data: [id]});
    }

    public async resetQuestionDatabaseTables(): Promise<AxiosResponse> {
        return await axios.put(QuestionService.BASE_URL + '/reset');
    }
}
