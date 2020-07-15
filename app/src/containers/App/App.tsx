import {Button, Container, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {QuestionDao} from '../../common/dao/QuestionDao';
import {Question} from '../../common/models/Question';
import {PlayerStateService} from '../../common/services/PlayerStateService';
import {QuestionService} from '../../common/services/QuestionService';
import GameBoard from '../../components/GameBoard/GameBoard';
import Layout from '../../components/Layout/Layout';
import StartScreen from '../../components/StartScreen/StartScreen';
import './App.css';

const playerStateService: PlayerStateService = PlayerStateService.instance;
const questionService: QuestionService = QuestionService.instance;

// TODO: Remove/edit after skeletal increment demo
const questionDao: QuestionDao = QuestionDao.instance;

const App = () => {
    // TODO: Remove/edit after skeletal increment demo
    const demoInsertQuestionHandler = () => {
        const demoQuestion: Question = new Question(
            'What year was the Declaration of Independence signed?',
            '1776',
            '1992,1999,1990');
        console.log(`[App] inserting question into demoDB...`);
        questionService.insertQuestion(demoQuestion);
        console.log(`[App] inserting question into demoDB - COMPLETE`);
    };

    // TODO: Remove/edit after skeletal increment demo
    const showDemoDatabaseContentsHandler = () => {
        console.log(`[App] printing demoDB...`);
        questionDao.printDemoDB();
        console.log(`[App] printing demoDB - COMPLETE`);
    };

    // TODO: Remove/edit after skeletal increment demo
    const deleteItemDemoDBHandler = () => {
        console.log(`[App] deleting last item...`);
        questionDao.delete();
        console.log(`[App] deleting last item - COMPLETE`);
    };

    // TODO: Remove/edit after skeletal increment demo
    const getFirstItemFromDemoDBHandler = () => {
        console.log(`[App] getting first item...`);
        const firstItem: Question = questionDao.getFirstItem();
        console.log(`[App] got first item: ${JSON.stringify(firstItem)}`);
    };

    // TODO: Remove/edit after skeletal increment demo
    let dieValue: number = 0;
    const rollDieHandler = () => {
        dieValue = Math.ceil(Math.random() * 6);
        console.log(`[App] new die value: ${dieValue}`);
    };

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
    const toggleShowStartScreenHandler = () => {
        console.log(!showStartScreen ? '[App] Show Startscreen' : '[App] Show Gameboard');  // TODO: Remove logging
        toggleShowStartScreen(!showStartScreen);
    };

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

                {/*TODO: Remove/edit after skeletal increment demo*/}
                <Grid container
                      direction={'row'}
                      justify={'space-between'}>
                    <Grid item xs={12}>
                        <h3>Testing for Skeletal Increment Demo:</h3>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'}
                                color={'default'}
                                onClick={demoInsertQuestionHandler}>
                            DEMO: Insert Question
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'}
                                color={'default'}
                                onClick={showDemoDatabaseContentsHandler}>
                            DEMO: Log Database Contents
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'}
                                color={'default'}
                                onClick={deleteItemDemoDBHandler}>
                            DEMO: Delete Item From Database
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'}
                                color={'default'}
                                onClick={getFirstItemFromDemoDBHandler}>
                            DEMO: Get Item From Database
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant={'contained'}
                                color={'default'}
                                onClick={rollDieHandler}>
                            DEMO: Roll Die
                        </Button>
                    </Grid>
                </Grid>

            </Layout>
        </Container>
    );
};

export default App;
