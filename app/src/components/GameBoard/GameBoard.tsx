import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import propTypes from 'prop-types';
import GameSpace from "./GameSpace/GameSpace";

const GameBoard = (props: any) => {
    return (
        <Paper>
            {/*<Grid container>*/}
            {/*    <h1>Game Board</h1>*/}
            {/*    <Button variant="contained"*/}
            {/*            color="primary"*/}
            {/*            onClick={props.clicked}>Quit Game</Button>*/}
            {/*</Grid>*/}
            <Grid container spacing={2}>
                <Grid item xs>
                    <GameSpace topic='Topic1'>xs</GameSpace>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs>
                    <Paper>xs</Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper>xs=9</Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

GameBoard.propTypes = {
    players: propTypes.array,
    clicked: propTypes.func
}

export default GameBoard;
