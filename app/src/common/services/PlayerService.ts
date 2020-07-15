import {Player} from '../models/Player';
import {DEFAULT_PLAYERS} from '../models/states/DefaultStates';

export class PlayerService {
    private _playerState: Player[] = [];

    constructor() {
        if (this._playerState == null || this._playerState.length === 0) {
            this._playerState = DEFAULT_PLAYERS;
        }
    }

    get playerState(): Player[] {
        return this._playerState;
    }

    set playerState(playerState: Player[]) {
        this._playerState = playerState;
    }
}
