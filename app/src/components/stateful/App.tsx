import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import './App.css';
import StartScreen from '../stateless/StartScreen/StartScreen';
import GameBoard from '../stateless/GameBoard/GameBoard';
import {TokenColor} from "../../enums/TokenColor";

const initialPlayerState = {
    players: [
        {
            id: 1,
            name: 'Player 1',
            tokenColor: TokenColor.RED,
            pos: 0                          // consider using an enum such as BoardPosition.START
        },
        {
            id: 2,
            name: 'Player 2',
            tokenColor: TokenColor.BLUE,
            pos: 0
        },
        {
            id: 3,
            name: 'Player 3',
            tokenColor: TokenColor.GREEN,
            pos: 0
        },
        {
            id: 4,
            name: 'Player 4',
            tokenColor: TokenColor.YELLOW,
            pos: 0
        }
    ]
}

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({...initialPlayerState});

    const changeNameHandler = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];
        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;
        setPlayerState({players: copyPlayers});
    }

    const toggleShowStartScreenHandler = () => {
        toggleShowStartScreen(!showStartScreen);
    }

    const page = showStartScreen ?
        <StartScreen players={playerState.players}
                     changeName={changeNameHandler}
                     startGame={() => toggleShowStartScreenHandler()}/> :
        <GameBoard players={playerState.players}
                   clicked={() => toggleShowStartScreenHandler()}/>;
    return (
        <Container className="App">
            {page}
        </Container>
    );
}

export default App;
