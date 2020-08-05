import {Button, Grid, Paper} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import Players from '../Players/Players';

/**
 * This component contains game state information such as player names, token cake status, and current player turn.
 * Also, contains the button to roll the die.
 * @param props
 * @constructor
 */
const GameControl = (props: any) => {
    /* TODO: finish implementing the GameControl component */
    return (
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Trivial Purfuit</h1>
                    <Players players={props.players}
                             changeName={props.changeName}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant={'contained'} color={'primary'}>
                        Roll Die (doesn't work yet)
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

GameControl.propTypes = {
    players: propTypes.array,
    changeName: propTypes.func,
    startGame: propTypes.func
};

export default GameControl;
