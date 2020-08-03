import {Container, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {GameManagerService} from '../../common/services/GameManagerService';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameControl from '../../components/GameControl/GameControl';
import StartScreen from '../../components/StartScreen/StartScreen';
import './App.css';
import GameContext from '../../contexts/GameContext';

const gameManagerService: GameManagerService = GameManagerService.instance;

const App = () => {
    // const [showStartScreen, toggleShowStartScreen] = useState(true);
    //
    // const [playerState, setPlayerState] = useState({
    //     players: gameManagerService.playerState
    // });

    const playerState = {
        players: gameManagerService.playerState
    };

    // const changeNameHandler = (event: any, id: number) => {
    //     const copyPlayers = [...playerState.players];
    //     const playerIndex = copyPlayers.findIndex(player => player.id === id);
    //     const copyPlayer = copyPlayers[playerIndex];
    //
    //     copyPlayer.name = event.target.value;
    //     copyPlayers[playerIndex] = copyPlayer;
    //
    //     gameManagerService.playerState = copyPlayers;
    //     setPlayerState({players: gameManagerService.playerState});
    // };

    // TODO: Consider replacing this show/hide functionality with routing
    // const toggleShowStartScreenHandler = () => {
    //     toggleShowStartScreen(!showStartScreen);
    // };

    // const page = showStartScreen ?
    //     <StartScreen players={playerState.players}
    //                  changeName={changeNameHandler}
    //                  startGame={() => toggleShowStartScreenHandler()}/> :
    //     <GameBoard players={playerState.players}
    //                clicked={() => toggleShowStartScreenHandler()}/>;


    return (
        <Container className="App">
                <GameContext.Provider value={playerState}>
                    <Grid container>
                        <Grid item xs={3}>
                            <GameControl/>
                        </Grid>
                        <Grid item xs={9}>
                            <GameBoard/>
                        </Grid>
                    </Grid>
                </GameContext.Provider>
        </Container>
    );
};

export default App;
