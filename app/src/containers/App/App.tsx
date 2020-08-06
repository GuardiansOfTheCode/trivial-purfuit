import {Container, Grid} from '@material-ui/core';
import {AxiosResponse} from 'axios';
import React, {useState} from 'react';
import {Answer} from '../../common/models/Answer';
import {Player} from '../../common/models/Player';
import {Question} from '../../common/models/Question';
import {QuestionCard} from '../../common/models/QuestionCard';
import {GameManagerService} from '../../common/services/GameManagerService';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameControl from '../../components/GameControl/GameControl';
import Layout from '../../components/Layout/Layout';
import './App.css';

const gameManagerService: GameManagerService = GameManagerService.instance;

const App = () => {
    const [playerState, setPlayerState] = useState({
        players: gameManagerService.playerState
    });

    const [dieValue, setDieValue] = useState(gameManagerService.dieValue);

    const [inGame, setInGame] = useState(false);

    const handleFetchRandomQuestion = (event: any, categoryValue: number) => {
        gameManagerService.questionService.fetchRandomQuestionCardByCategory(categoryValue)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    /* Fetch all question cards */
    const handleFetchAllQuestionCards = () => {
        gameManagerService.questionService.fetchAllQuestionCards()
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    /* Fetch random card */
    const handleFetchRandomQuestionCard = () => {
        gameManagerService.questionService.fetchRandomQuestionCardByCategory(1)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    /* Add list of Question Cards */
    const handleAddQuestion = () => {
        const testQuestion = new Question(1, 'Is the sky blue?');
        const testAnswer = new Answer('Yes', true);
        const testWrongAnswer = new Answer('No', false);
        const testQuestionCard = new QuestionCard(testQuestion, [testAnswer, testWrongAnswer]);

        gameManagerService.questionService.addQuestionCards([testQuestionCard])
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    const handleUpdateQuestionCard = () => {
        const testQuestion = new Question(1, 'Is the sky red?');
        const testAnswer = new Answer('Yes', false);
        const testWrongAnswer = new Answer('No', true);
        const testQuestionCard = new QuestionCard(testQuestion, [testAnswer, testWrongAnswer]);
        gameManagerService.questionService.updateQuestionCard(5, testQuestionCard)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    /* Reset db */
    const handleResetDb = () => {
        gameManagerService.questionService.resetQuestionDatabaseTables()
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    /* Delete card by id */
    const handleDeleteQuestion = () => {
        gameManagerService.questionService.deleteQuestionCardById(42)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    }

    const handleInGameToggle = () => {
        setInGame(!inGame);
    }

    const handleChangeName = (event: any, id: number) => {
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];

        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;

        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});
    };

    const handleRollDie = () => {
        gameManagerService.dieValue = Math.ceil(Math.random() * 6);
        setDieValue(gameManagerService.dieValue);
        // console.log(gameManagerService.dieValue);
    }

    const handleDrop = async (event: any, pos: number[], topic: string, cakeSlice: number) => {
        const id = event.dataTransfer.getData('playerId');
        const copyPlayers = [...playerState.players];
        // eslint-disable-next-line
        const playerIndex = copyPlayers.findIndex(player => player.id == id);
        const copyPlayer: Player = copyPlayers[playerIndex];

        copyPlayer.pos = pos;
        copyPlayers[playerIndex] = copyPlayer;

        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});

        let category: number = 0;

        switch (topic) {
            case 'Topic1':
            case 'CakeSpace1':
                category = 0;
                break;
            case 'Topic2':
            case 'CakeSpace2':
                category = 1;
                break;
            case 'Topic3':
            case 'CakeSpace3':
                category = 2; break;
            case 'Topic4':
            case 'CakeSpace4':
                category = 3;
                break;
        }

        const response: AxiosResponse = await gameManagerService.questionService.fetchRandomQuestionCardByCategory(category);

        /* TODO: Remove after demo */
        console.log(`Question: ${response.data.question}`);
        console.log(`Your answer: ${response.data.answers[0].answer}`);
        console.log(`Your answer is ${response.data.answers[0].correct === 1 ? 'correct' : 'incorrect'}.`);

        switch (cakeSlice) {
            case 1: copyPlayer.cakeSlice1 = true; break;
            case 2: copyPlayer.cakeSlice2 = true; break;
            case 3: copyPlayer.cakeSlice3 = true; break;
            case 4: copyPlayer.cakeSlice4 = true; break;
        }

        copyPlayers[playerIndex] = copyPlayer;
        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});
    }

    return (
        <Container className="App">
            <Layout>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch">

                    <Grid item xs={3}>
                        <GameControl players={playerState.players}
                                     changeName={handleChangeName}
                                     inGame={inGame}
                                     dieValue={dieValue}
                                     onClick={handleInGameToggle}
                                     onClickRollDie={handleRollDie}
                                     onClickAddQuestion={handleAddQuestion}
                                     onClickDeleteQuestion={handleDeleteQuestion}
                                     onClickFetchAll={handleFetchAllQuestionCards}
                                     onClickFetchRandomCard={handleFetchRandomQuestionCard}
                                     onClickUpdateCard={handleUpdateQuestionCard}
                                     onClickResetDb={handleResetDb}/>
                    </Grid>
                    <Grid item xs={9}>
                        <GameBoard players={playerState.players}
                                   handleDrop={handleDrop}
                                   onClickFetchRandomQuestion={handleFetchRandomQuestion}
                                   inGame={inGame}/>
                    </Grid>

                </Grid>
            </Layout>
        </Container>
    );
};

export default App;
