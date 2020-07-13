import React from 'react';
import {Button, Divider, Paper} from "@material-ui/core";
import './StartScreen.css';
import Players from '../Players/Players';
import propTypes from 'prop-types';

const startScreen = (props: any) => {
    return (
        <Paper className="StartScreen"
               variant="outlined">
            <h1>Welcome To Trivial Purfuit</h1>
            <Players players={props.players}
                     changeName={props.changeName}/>

            <Divider/>

            {/* The question/answer component will go here */}

            <Button variant="contained"
                    color="primary"
                    onClick={props.startGame}>Start Game</Button>
        </Paper>
    )
}

startScreen.propTypes = {
    players:    propTypes.array,
    changeName: propTypes.func,
    startGame:  propTypes.func
}

export default startScreen;
