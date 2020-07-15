import React, {useState} from 'react';
import {Button, Container} from '@material-ui/core';
import './App.css';
import Layout from '../../components/Layout/Layout';
import StartScreen from '../../components/StartScreen/StartScreen';
import GameBoard from '../../components/GameBoard/GameBoard';
import {PlayerStateService} from '../../common/services/PlayerStateService';
import {QuestionService} from '../../common/services/QuestionService';
import {Question} from '../../common/models/Question';
import {QuestionDao} from '../../common/dao/QuestionDao';

const playerStateService: PlayerStateService = PlayerStateService.instance;
const questionService: QuestionService = QuestionService.instance;

// TODO: Remove/edit after skeletal increment demo
const demoDB: Question[] = QuestionDao.instance.demoDB;

const App = () => {
    // TODO: Remove/edit after skeletal increment demo
    const demoInsertQuestionHandler = () => {
        console.log(`[demoDB] = ${JSON.stringify(demoDB)}`);
        const demoQuestion: Question = new Question(
            'What year was the Declaration of Independence signed?',
            '1776',
            '1992,1999,1990');
        questionService.insertQuestion(demoQuestion);
        console.log(`[demoDB] = ${JSON.stringify(demoDB)}`);
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

                {/*TODO: Remove/edit after skeletal increment demo*/}
                <Button variant={'contained'}
                        color={'secondary'}
                        onClick={demoInsertQuestionHandler}>
                    DEMO INSERT QUESTION
                </Button>
            </Layout>
        </Container>
    );
};

export default App;
