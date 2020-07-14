import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import './App.css';
import Layout from '../../components/Layout/Layout';
import StartScreen from '../../components/StartScreen/StartScreen';
import GameBoard from '../../components/GameBoard/GameBoard';
import {DEFAULT_PLAYERS} from "../../common/models/states/DefaultStates"

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({...DEFAULT_PLAYERS});

    const changeNameHandler = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];
        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;
        setPlayerState({players: copyPlayers});
    }

    const toggleShowStartScreenHandler = () => toggleShowStartScreen(!showStartScreen);

    const page = showStartScreen ?
        <StartScreen players={playerState.players}
                     changeName={changeNameHandler}
                     startGame={() => toggleShowStartScreenHandler()}/> :
        <GameBoard players={playerState.players}
                   clicked={() => toggleShowStartScreenHandler()}/>;

    return (
        <Container className="App">
            <Layout>
                {page}
            </Layout>
        </Container>
    );
}

export default App;
