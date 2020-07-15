import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import './App.css';
import Layout from '../../components/Layout/Layout';
import StartScreen from '../../components/StartScreen/StartScreen';
import GameBoard from '../../components/GameBoard/GameBoard';
import {PlayerStateService} from '../../common/services/PlayerStateService';

const playerStateService: PlayerStateService = PlayerStateService.instance;

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({
        players: playerStateService.playerState
    });

    const changeNameHandler = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];

        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;

        playerStateService.playerState = copyPlayers;
        setPlayerState({players: playerStateService.playerState});
    };

    // TODO: Consider replacing this show/hide functionality with routing
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
};

export default App;
