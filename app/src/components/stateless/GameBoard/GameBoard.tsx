import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";

const gameBoard = (props: any) => {
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

export default gameBoard;
