import {Player} from '../models/Player';
import {DEFAULT_PLAYERS} from '../models/states/DefaultStates';

export class PlayerStateService {
    private _instance?: Player[] = undefined;

    constructor() {
        if (this._instance == null || this._instance.length === 0) {
            this._instance = DEFAULT_PLAYERS;
        }
    }

    get instance(): Player[] {
        return this._instance !== undefined ?
            this._instance : [];
    }

    set instance(playerState: Player[]) {
        this._instance = playerState;
    }
}
