import {createContext} from 'react';
import {DEFAULT_PLAYERS} from '../common/models/states/DefaultStates';

const GameContext = createContext({
    players: DEFAULT_PLAYERS
});

export default GameContext;
