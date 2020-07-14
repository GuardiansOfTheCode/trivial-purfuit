import {TokenColor} from '../../enums/TokenColor';
import {Player} from '../Player';

export const DEFAULT_PLAYERS = {
    players: [
        new Player(1, 'Player 1', TokenColor.RED, 0, 0, 0, 0, false, false, false, false),
        new Player(2, 'Player 2', TokenColor.GREEN, 0, 0, 0, 0, false, false, false, false),
        new Player(3, 'Player 3', TokenColor.BLUE, 0, 0, 0, 0, false, false, false, false),
        new Player(4, 'Player 4', TokenColor.YELLOW, 0, 0, 0, 0, false, false, false, false)
    ]
};

export const DEFAULT_GAME_BOARD = {
    testField: 'Hello World'
};
