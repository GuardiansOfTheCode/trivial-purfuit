import {Container, Grid} from '@material-ui/core';
import React, {useState} from 'react';
import {Answer} from '../../common/models/Answer';
import {Question} from '../../common/models/Question';
import {QuestionCard} from '../../common/models/QuestionCard';
import {GameManagerService} from '../../common/services/GameManagerService';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameControl from '../../components/GameControl/GameControl';
import Layout from '../../components/Layout/Layout';
import './App.css';

const gameManagerService: GameManagerService = GameManagerService.instance;

const App = () => {
    /* Fetch all question cards */
    // gameManagerService.questionService.fetchAllQuestionCards()
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    /* Fetch random card */
    // gameManagerService.questionService.fetchRandomQuestionCardByCategory(1)
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    /* Add list of Question Cards */
    // const testQuestion = new Question(1, 'Is the sky blue?');
    // const testAnswer = new Answer('Yes', true);
    // const testWrongAnswer = new Answer('No', false);
    // const testQuestionCard = new QuestionCard(testQuestion, [testAnswer, testWrongAnswer]);
    //
    // gameManagerService.questionService.addQuestionCards([testQuestionCard])
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    // const testQuestion = new Question(1, 'Is the sky red?');
    // const testAnswer = new Answer('Yes', false);
    // const testWrongAnswer = new Answer('No', true);
    // const testQuestionCard = new QuestionCard(testQuestion, [testAnswer, testWrongAnswer]);
    // gameManagerService.questionService.updateQuestionCard(5, testQuestionCard)
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    /* Reset db */
    // gameManagerService.questionService.resetQuestionDatabaseTables()
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    /* Delete card by id */
    // gameManagerService.questionService.deleteQuestionCardById(42)
    //     .then(response => console.log(`${JSON.stringify(response.data)}`));

    const [inGame, setInGame] = useState(false);

    const handleInGameToggle = () => {
        setInGame(!inGame);
    }

    const [playerState, setPlayerState] = useState({
        players: gameManagerService.playerState
    });

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
        console.log(gameManagerService.dieValue);
    }

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
                                     changeName={handleChangeName}
                                     inGame={inGame}
                                     onClick={handleInGameToggle}
                                     onClickRollDie={handleRollDie}/>
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
