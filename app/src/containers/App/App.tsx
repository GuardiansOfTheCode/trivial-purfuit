import {Container, Grid} from '@material-ui/core';
import {AxiosResponse} from 'axios';
import React, {useState} from 'react';
import {Answer} from '../../common/models/Answer';
import {Player} from '../../common/models/Player';
import {Question} from '../../common/models/Question';
import {QuestionCard} from '../../common/models/QuestionCard';
import {DEFAULT_PLAYERS} from '../../common/models/states/DefaultStates';
import {GameManagerService} from '../../common/services/GameManagerService';
import GameBoard from '../../components/GameBoard/GameBoard';
import GameControl from '../../components/GameControl/GameControl';
import Layout from '../../components/Layout/Layout';
import './App.css';

const gameManagerService: GameManagerService = GameManagerService.instance;

const App = () => {
    const [playerState, setPlayerState] = useState({players: gameManagerService.playerState});
    const [currentPlayer, setCurrentPlayer] = useState(gameManagerService.currentPlayer);
    const [dieValue, setDieValue] = useState(gameManagerService.dieValue);
    const [inGame, setInGame] = useState(false);
    const [questionState, setQuestionState] = useState({
        questionCard: {
            question: {
                category: -1,
                question: ''
            },
            answers: [
                {
                    answer: '',
                    correct: true
                },
                {
                    answer: '',
                    correct: false
                },
                {
                    answer: '',
                    correct: false
                },
                {
                    answer: '',
                    correct: false
                }
            ]
        }
    });

    const handleNextPlayer = () => {
        gameManagerService.nextPlayer();
        setCurrentPlayer(gameManagerService.currentPlayer);
    }

    const handleFetchRandomQuestion = (event: any, categoryValue: number) => {
        gameManagerService.questionService.fetchRandomQuestionCardByCategory(categoryValue)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Fetch all question cards */
    const handleFetchAllQuestionCards = () => {
        gameManagerService.questionService.fetchAllQuestionCards()
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Fetch random card */
    const handleFetchRandomQuestionCard = () => {
        gameManagerService.questionService.fetchRandomQuestionCardByCategory(1)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Add list of Question Cards */
    const handleAddQuestion = () => {
        const question: Question = questionState.questionCard.question;
        if (question.category < 1 || question.category > 5) {
            return;
        }
        const answers: Answer[] = questionState.questionCard.answers;
        const questionCard: QuestionCard = new QuestionCard(question, answers);

        gameManagerService.questionService.addQuestionCards([questionCard])
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    // const handleUpdateQuestionCard = () => {
    //     const question: Question = questionState.questionCard.question;
    //     if (question.category < 1 || question.category > 5) {
    //         return;
    //     }
    //     const answers: Answer[] = questionState.questionCard.answers;
    //     const questionCard: QuestionCard = new QuestionCard(question, answers);
    //     gameManagerService.questionService.updateQuestionCard(updateQuestionID, questionCard)
    //         .then(response => console.log(`${JSON.stringify(response.data)}`));
    // };

    /* Reset db */
    const handleResetDb = () => {
        gameManagerService.questionService.resetQuestionDatabaseTables()
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Delete card by id */
    const handleDeleteQuestion = () => {
        gameManagerService.questionService.deleteQuestionCardById(42)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    const handleQuestionChange = (event: any) => {
        const newQuestion: string[] = event.target.value.split(new RegExp('[.?!_]'));

        if (newQuestion.length === 6) { /* Add Question */
            const question: Question = new Question(parseInt(newQuestion[0]), newQuestion[1]);
            const answers: Answer[] = [];
            answers.push(new Answer(newQuestion[2], true));
            answers.push(new Answer(newQuestion[3], false));
            answers.push(new Answer(newQuestion[4], false));
            answers.push(new Answer(newQuestion[5], false));
            const questionCard: QuestionCard = new QuestionCard(question, answers);
            setQuestionState({questionCard: questionCard});
        }
    }

    const handleInGameToggle = () => {
        setInGame(!inGame);
        if (!inGame) {
            gameManagerService.playerState = DEFAULT_PLAYERS;
            setPlayerState({players: gameManagerService.playerState});
        }
    };

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
    };

    const handleDrop = async (event: any, pos: number[], topic: string, cakeSlice: number, currentPlayer: number) => {
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

        /* Fetch random question */
        const response: AxiosResponse = await gameManagerService.questionService.fetchRandomQuestionCardByCategory(category);

        switch (cakeSlice) {
            case 1:
                copyPlayer.cakeSlice1 = true;
                break;
            case 2:
                copyPlayer.cakeSlice2 = true;
                break;
            case 3:
                copyPlayer.cakeSlice3 = true;
                break;
            case 4:
                copyPlayer.cakeSlice4 = true;
                break;
            default:
                break;
        }

        copyPlayers[playerIndex] = copyPlayer;
        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});

        gameManagerService.nextPlayer();
        setCurrentPlayer(gameManagerService.currentPlayer);
    };

    return (
        <Container className={'App'}>
            <Layout>
                <Grid
                    container
                    direction={'row'}
                    justify={'center'}
                    alignItems={'stretch'}>

                    <Grid item xs={3}>
                        <GameControl players={playerState.players}
                                     changeName={handleChangeName}
                                     inGame={inGame}
                                     dieValue={dieValue}
                                     currentPlayer={currentPlayer}
                                     questionChange={handleQuestionChange}
                                     onClick={handleInGameToggle}
                                     onClickRollDie={handleRollDie}
                                     onClickAddQuestion={handleAddQuestion}
                                     onClickDeleteQuestion={handleDeleteQuestion}
                                     onClickFetchAll={handleFetchAllQuestionCards}
                                     onClickFetchRandomCard={handleFetchRandomQuestionCard}
                                     // onClickUpdateCard={handleUpdateQuestionCard}
                                     onClickResetDb={handleResetDb}/>
                    </Grid>
                    <Grid item xs={9}>
                        <GameBoard players={playerState.players}
                                   handleDrop={handleDrop}
                                   onClickFetchRandomQuestion={handleFetchRandomQuestion}
                                   currentPlayer={currentPlayer}
                                   inGame={inGame}/>
                    </Grid>

                </Grid>
            </Layout>
        </Container>
    );
};

export default App;
