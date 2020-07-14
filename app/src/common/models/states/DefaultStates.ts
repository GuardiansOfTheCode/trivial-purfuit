import {TokenColor} from "../../enums/TokenColor";
import {Player} from '../Player';

export const DEFAULT_PLAYERS = {
    players: [
        new Player(1, 'Player 1', TokenColor.RED, 0, 0, 0, 0),
        new Player(2, 'Player 2', TokenColor.BLUE, 0, 0, 0, 0),
        new Player(3, 'Player 3', TokenColor.YELLOW, 0, 0, 0, 0),
        new Player(4, 'Player 4', TokenColor.GREEN, 0, 0, 0, 0)
    ]
}

export const DEFAULT_GAME_BOARD = {
    testField: 'Hello World'
}
