import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import propTypes from 'prop-types';

const GameBoard = (props: any) => {
    return (
        <Paper>
            <Grid>
                <h1>Game Board</h1>
                <Button variant="contained"
                        color="primary"
                        onClick={props.clicked}>Quit Game</Button>
            </Grid>
        </Paper>
    )
}

GameBoard.propTypes = {
    players: propTypes.array,
    clicked: propTypes.func
}

export default GameBoard;
