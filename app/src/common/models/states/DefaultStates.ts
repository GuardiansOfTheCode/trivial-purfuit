import {TokenColor} from '../../enums/TokenColor';
import {Player} from '../Player';

export const DEFAULT_PLAYERS = {
    players: [
        new Player(1, 'Player 1', TokenColor.RED, [4, 4], 0, 0, 0, false, false, false, false),
        new Player(2, 'Player 2', TokenColor.GREEN, [4, 4], 0, 0, 0, false, false, false, false),
        new Player(3, 'Player 3', TokenColor.BLUE, [4, 4], 0, 0, 0, false, false, false, false),
        new Player(4, 'Player 4', TokenColor.YELLOW, [4, 4], 0, 0, 0, false, false, false, false)
    ]
};
