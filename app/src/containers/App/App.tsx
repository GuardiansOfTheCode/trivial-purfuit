import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import './App.css';
import Layout from '../../components/Layout/Layout';
import StartScreen from '../../components/StartScreen/StartScreen';
import GameBoard from '../../components/GameBoard/GameBoard';
import {PlayerService} from '../../common/services/PlayerService';

const playerService: PlayerService = new PlayerService();

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({
        players: playerService.playerState
    });

    const changeNameHandler = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];

        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;

        playerService.playerState = copyPlayers;
        setPlayerState({players: playerService.playerState});
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
