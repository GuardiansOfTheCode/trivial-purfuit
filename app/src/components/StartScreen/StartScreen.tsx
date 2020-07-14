import React from 'react';
import {Button, Divider, Paper} from "@material-ui/core";
import propTypes from 'prop-types';
import './StartScreen.css';
import Players from '../Players/Players';

const StartScreen = (props: any) => {
    return (
        <Paper className="StartScreen"
               variant="outlined">
            <h1>Welcome To Trivial Purfuit</h1>
            <Players players={props.players}
                     changeName={props.changeName}/>

            <Divider/>

            {/*TODO: Question/Answer component*/}

            <Button variant="contained"
                    color="primary"
                    onClick={props.startGame}>Start Game</Button>
        </Paper>
    )
}

StartScreen.propTypes = {
    players:    propTypes.array,
    changeName: propTypes.func,
    startGame:  propTypes.func
}

export default StartScreen;
