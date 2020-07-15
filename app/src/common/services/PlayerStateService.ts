import {Player} from '../models/Player';
import {DEFAULT_PLAYERS} from '../models/states/DefaultStates';

export class PlayerStateService {
    private static _instance: PlayerStateService = new PlayerStateService();
    private _playerState: Player[] = DEFAULT_PLAYERS;

    constructor() {
        if (PlayerStateService._instance) {
            throw new Error("Instantiation failed: Use PlayerStateService.instance instead of 'new'.");
        }
        PlayerStateService._instance = this;
    }

    static get instance(): PlayerStateService {
        return this._instance;
    }

    static set instance(value: PlayerStateService) {
        this._instance = value;
    }

    get playerState(): Player[] {
        return this._playerState;
    }

    set playerState(value: Player[]) {
        this._playerState = value;
    }
}
