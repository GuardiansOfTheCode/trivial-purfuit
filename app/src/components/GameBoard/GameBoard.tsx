import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import propTypes from 'prop-types';
import GameSpace from "./GameSpace/GameSpace";

const GameBoard = (props: any) => {
    return (
        <Paper>

            {/*move this logic into the navbar*/}
            <div>
                <h1>Trivial Pursuit</h1>
                <Button variant='contained'
                        color='primary'
                        onClick={props.clicked}>
                    Quit Game
                </Button>
            </div>

            <Grid container justify='center'>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='Topic3'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='Topic3'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic2'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='Topic3'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='Start'/>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='Topic3'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='Topic3'/>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='Topic4'/>
                <GameSpace topic='Topic1'/>
                <GameSpace topic='Topic2'/>
                <GameSpace topic='RollAgain'/>
                <GameSpace topic='Topic3'/>
                <GameSpace topic='Topic4'/>
            </Grid>
        </Paper>
    )
}

GameBoard.propTypes = {
    players: propTypes.array,
    clicked: propTypes.func
}

export default GameBoard;
