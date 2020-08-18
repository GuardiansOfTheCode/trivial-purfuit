import {Button, Grid, Paper} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import Players from './Players/Players';
import Question from './Question/Question';

/**
 * This component contains game state information such as player names, token cake status, and current player turn.
 * Also, contains the button to roll the die.
 * @param props
 * @constructor
 */
const GameControl = (props: any) => {
    const startQuitButton = !props.inGame ?
        <Grid item xs={12}>
            <Button variant={'contained'}
                    color={'primary'}
                    onClick={props.onClick}>
                Start Game
            </Button>
        </Grid> :
        <Grid container>
            <Grid item xs={6}>
                <Button variant={'contained'}
                        color={'default'}
                        onClick={props.onClick}>
                    Quit Game
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button variant={'contained'}
                        color={'primary'}
                        onClick={props.onClickRollDie}>
                    Roll Die
                </Button>
            </Grid>
        </Grid>;

    const addQuestion = !props.inGame ?
        <Grid item xs={12}>
            <hr/>
            <Question {...props}/>
        </Grid> : '';

    const dieValue = props.inGame ?
        <Grid item xs={12}>
            <h4>Die value: {props.dieValue}</h4>
        </Grid> : null;

    return (
        <Paper>
            <Grid container>

                <Grid item xs={12}>
                    <h1>Trivial Purfuit</h1>
                    <Players players={props.players}
                             changeName={props.changeName}
                             inGame={props.inGame}
                             currentPlayer={props.currentPlayer}/>
                    {dieValue}
                </Grid>

                {startQuitButton}
                {addQuestion}

            </Grid>
        </Paper>
    )
}

GameControl.propTypes = {
    players: propTypes.array,
    changeName: propTypes.func,
    inGame: propTypes.bool,
    questionChange: propTypes.func,
    currentPlayer: propTypes.number,
    onClick: propTypes.func,
    onClickRollDie: propTypes.func,
    onClickAddQuestion: propTypes.func,
    onClickDeleteQuestion: propTypes.func,
    onClickFetchAll: propTypes.func,
    onClickFetchRandomCard: propTypes.func,
    // onClickUpdateCard: propTypes.func,
    onClickResetDb: propTypes.func,
    dieValue: propTypes.number
};

export default GameControl;
