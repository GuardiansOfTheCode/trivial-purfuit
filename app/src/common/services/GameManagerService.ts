import {Player} from '../models/Player';
import {DEFAULT_PLAYERS} from '../models/states/DefaultStates';
import {QuestionService} from './QuestionService';

export class GameManagerService {
    private static _instance: GameManagerService = new GameManagerService();
    private _questionService: QuestionService = QuestionService.instance;
    private _playerState: Player[] = DEFAULT_PLAYERS;

    constructor() {
        if (GameManagerService._instance) {
            throw new Error('Instantiation failed: Use PlayerStateService.instance instead of \'new\'.');
        }
        GameManagerService._instance = this;
    }

    static get instance(): GameManagerService {
        return this._instance;
    }

    static set instance(value: GameManagerService) {
        this._instance = value;
    }

    get playerState(): Player[] {
        return this._playerState;
    }

    set playerState(value: Player[]) {
        this._playerState = value;
    }

    get questionService(): QuestionService {
        return this._questionService;
    }
}
