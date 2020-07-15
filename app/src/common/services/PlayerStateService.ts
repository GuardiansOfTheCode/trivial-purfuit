import {Player} from '../models/Player';
import {DEFAULT_PLAYERS} from '../models/states/DefaultStates';

export class PlayerStateService {
    constructor() {
        if (PlayerStateService._instance) {
            throw new Error('Instantiation failed: Use PlayerStateService.instance instead of \'new\'.');
        }
        PlayerStateService._instance = this;
    }

    private static _instance: PlayerStateService = new PlayerStateService();

    static get instance(): PlayerStateService {
        return this._instance;
    }

    static set instance(value: PlayerStateService) {
        this._instance = value;
    }

    private _playerState: Player[] = DEFAULT_PLAYERS;

    get playerState(): Player[] {
        return this._playerState;
    }

    // TODO: Remove/edit after skeletal increment demo
    set playerState(value: Player[]) {
        console.log(`[PlayerStateService] playerState updated`);
        this._playerState = value;
    }
}
