import {Container, Grid, Modal, Paper} from '@material-ui/core';
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
    const [playerState, setPlayerState] = useState({players: gameManagerService.playerState});
    const [currentPlayer, setCurrentPlayer] = useState(gameManagerService.currentPlayer);
    const [currentQuestion, setCurrentQuestion] = useState(new QuestionCard(new Question(0, ''), [new Answer('', false)]));
    const [dieValue, setDieValue] = useState(gameManagerService.dieValue);
    const [inGame, setInGame] = useState(false);
    const [openFetchAllModal, setOpenFetchAllModal] = useState(false);
    const [allFetchedQuestions, setAllFetchedQuestions] = useState('');
    const [openQuestionModal, setOpenQuestionModal] = useState(false);
    const [cakeSlice, setCakeSlice] = useState(-1);
    const [addQuestionState, setAddQuestionState] = useState({
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
    const [updateQuestionState, setUpdateQuestionState] = useState({
        id: -1,
        questionCard: addQuestionState.questionCard
    });
    const [deleteQuestionIDState, setDeleteQuestionIDState] = useState(-1);

    const handleOpenFetchAllModal = async () => {
        const response: AxiosResponse = await gameManagerService.questionService.fetchAllQuestionCards();
        setOpenFetchAllModal(true);
        setAllFetchedQuestions(JSON.stringify(response.data));
    };

    const handleCloseFetchAllModal = () => {
        setOpenFetchAllModal(false);
    };

    const handleOpenQuestionModal = () => {
        setOpenQuestionModal(true);
    };

    const handleCloseQuestionModal = () => {
        setOpenQuestionModal(false);
    };

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
        const question: Question = addQuestionState.questionCard.question;
        if (question.category < 1 || question.category > 5) {
            return;
        }
        const answers: Answer[] = addQuestionState.questionCard.answers;
        const questionCard: QuestionCard = new QuestionCard(question, answers);

        gameManagerService.questionService.addQuestionCards([questionCard])
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Update Question */
    const handleUpdateQuestion = () => {
        const question: Question = updateQuestionState.questionCard.question;
        if (question.category < 1 || question.category > 5) {
            return;
        }

        gameManagerService.questionService.updateQuestionCard(updateQuestionState.id, updateQuestionState.questionCard)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Reset db */
    const handleResetDb = () => {
        gameManagerService.questionService.resetQuestionDatabaseTables()
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    /* Delete card by id */
    const handleDeleteQuestion = () => {
        gameManagerService.questionService.deleteQuestionCardById(deleteQuestionIDState)
            .then(response => console.log(`${JSON.stringify(response.data)}`));
    };

    const handleDeleteQuestionIDChange = (event: any) => {
        setDeleteQuestionIDState(event.target.value);
    };

    const handleAddQuestionChange = (event: any) => {
        const newQuestion: string[] = event.target.value.split(new RegExp('[.?!_]'));

        if (newQuestion.length === 6) { /* Add Question */
            const question: Question = new Question(parseInt(newQuestion[0]), newQuestion[1]);
            const answers: Answer[] = [];
            answers.push(new Answer(newQuestion[2], true));
            answers.push(new Answer(newQuestion[3], false));
            answers.push(new Answer(newQuestion[4], false));
            answers.push(new Answer(newQuestion[5], false));
            const questionCard: QuestionCard = new QuestionCard(question, answers);
            setAddQuestionState({questionCard: questionCard});
        }
    };

    const handleUpdateQuestionChange = (event: any) => {
        const updateQuestion: string[] = event.target.value.split(new RegExp('[.?!_]'));

        if (updateQuestion.length === 7) { /* Add Question */
            const id: number = parseInt(updateQuestion[0]);
            const question: Question = new Question(parseInt(updateQuestion[1]), updateQuestion[2]);
            const answers: Answer[] = [];
            answers.push(new Answer(updateQuestion[3], true));
            answers.push(new Answer(updateQuestion[4], false));
            answers.push(new Answer(updateQuestion[5], false));
            answers.push(new Answer(updateQuestion[6], false));
            const questionCard: QuestionCard = new QuestionCard(question, answers);
            setUpdateQuestionState({id: id, questionCard: questionCard});
            console.log(JSON.stringify(updateQuestionState));
        }
    };

    const handleInGameToggle = () => {
        setInGame(!inGame);
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

    const handleDrop = async (event: any,
                              pos: number[],
                              topic: string,
                              cakeSlice: number) => {
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
                category = 2;
                break;
            case 'Topic4':
            case 'CakeSpace4':
                category = 3;
                break;
            case 'RollAgain':
                return;
            case 'Start':
                if (playerState.players[currentPlayer - 1].totalCakeSlices === 4) {
                    console.log(`${playerState.players[currentPlayer - 1].name} wins!!!`);
                    handleInGameToggle();
                    return;
                }
        }

        /* Fetch random question */
        const response: AxiosResponse = await gameManagerService.questionService.fetchRandomQuestionCardByCategory(category);
        const question: Question = new Question(response.data.category, response.data.question);
        const answers: Answer[] = [];

        for (const answer of response.data.answers) {
            answers.push(new Answer(answer.answer, answer.correct !== 0));
        }
        const questionCard: QuestionCard = new QuestionCard(question, answers);
        setCurrentQuestion(questionCard);
        setCakeSlice(cakeSlice);
        if (topic !== 'Start') {
            handleOpenQuestionModal();
        }
    };

    const handleAnswerSelected = (event: any, correct: boolean) => {
        if (!correct) {
            gameManagerService.nextPlayer();
            setCurrentPlayer(gameManagerService.currentPlayer);
            handleCloseQuestionModal();
        }

        const copyPlayers = [...playerState.players];
        const copyPlayer = copyPlayers[currentPlayer - 1];
        switch (cakeSlice) {
            case 1:
                copyPlayer.cakeSlice1 = true;
                copyPlayer.totalCakeSlices++;
                break;
            case 2:
                copyPlayer.cakeSlice2 = true;
                copyPlayer.totalCakeSlices++;
                break;
            case 3:
                copyPlayer.cakeSlice3 = true;
                copyPlayer.totalCakeSlices++;
                break;
            case 4:
                copyPlayer.cakeSlice4 = true;
                copyPlayer.totalCakeSlices++;
                break;
            default:
                break;
        }

        copyPlayers[currentPlayer - 1] = copyPlayer;
        gameManagerService.playerState = copyPlayers;
        setPlayerState({players: gameManagerService.playerState});
        handleCloseQuestionModal();
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
                                     addQuestionChange={handleAddQuestionChange}
                                     updateQuestionChange={handleUpdateQuestionChange}
                                     deleteQuestionIDChange={handleDeleteQuestionIDChange}
                                     onClick={handleInGameToggle}
                                     onClickRollDie={handleRollDie}
                                     onClickAddQuestion={handleAddQuestion}
                                     onClickDeleteQuestion={handleDeleteQuestion}
                                     onClickFetchAll={handleFetchAllQuestionCards}
                                     onClickFetchRandomCard={handleFetchRandomQuestionCard}
                                     onClickResetDb={handleResetDb}
                                     onClickUpdateQuestion={handleUpdateQuestion}
                                     handleOpenFetchAllModal={handleOpenFetchAllModal}
                                     handleCloseFetchAllModal={handleCloseFetchAllModal}/>
                    </Grid>
                    <Grid item xs={9}>
                        <GameBoard players={playerState.players}
                                   handleDrop={handleDrop}
                                   onClickFetchRandomQuestion={handleFetchRandomQuestion}
                                   currentPlayer={currentPlayer}
                                   inGame={inGame}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Modal
                            open={openFetchAllModal}
                            onClose={handleCloseFetchAllModal}
                            aria-labelledby={'title'}
                            aria-describedby={'description'}>
                            <Paper>
                                <h2 id={'title'}>All Current Questions</h2>
                                <p id={'description'}>
                                    {allFetchedQuestions}
                                </p>
                            </Paper>
                        </Modal>
                    </Grid>
                    <Grid item xs={12}>
                        <Modal
                            open={openQuestionModal}
                            onClose={handleCloseQuestionModal}
                            aria-labelledby={'title'}
                            aria-describedby={'description'}>
                            <Paper>
                                <h2>{currentQuestion.question.question}</h2>
                                <ul>
                                    {currentQuestion.answers.map((answer: Answer) => {
                                        return (
                                            <li
                                                key={answer.answer}>
                                                <input type={'radio'}
                                                       onChange={(event: any) => {
                                                           handleAnswerSelected(event, answer.correct);
                                                       }}/>
                                                {answer.answer}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Paper>
                        </Modal>
                    </Grid>
                </Grid>
            </Layout>
        </Container>
    );
};

export default App;
