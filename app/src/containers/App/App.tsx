import {Container, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {GameManagerService} from '../../common/services/GameManagerService';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameControl from '../../components/GameControl/GameControl';
import Layout from '../../components/Layout/Layout';
import './App.css';

const gameManagerService: GameManagerService = GameManagerService.instance;

const App = () => {
    const [inGame, setInGame] = useState(false);

    const toggleInGameHandler = () => {
        setInGame(!inGame);
    }

    const [playerState, setPlayerState] = useState({
        players: gameManagerService.playerState
    });

    const changeNameHandler = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];

        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;

        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});
    };

    return (
        <Container className="App">
            <Layout>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <Grid item xs={3}>
                        <GameControl players={playerState.players}
                                     changeName={changeNameHandler}
                                     inGame={inGame}
                                     onClick={toggleInGameHandler}/>
                    </Grid>
                    <Grid item xs={9}>
                        <GameBoard players={playerState.players}/>
                    </Grid>

                </Grid>
            </Layout>
        </Container>
    );
};

export default App;
