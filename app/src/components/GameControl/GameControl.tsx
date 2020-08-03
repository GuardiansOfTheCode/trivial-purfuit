import {Button, Grid, Paper} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import Players from '../StartScreen/Players/Players';

/**
 * This component contains game state information such as player names, token cake status, and current player turn.
 * Also, contains the button to roll the die.
 * @param props
 * @constructor
 */
const GameControl = (props: any) => {
    /* TODO: finish implementing the GameControl component
    *   Should be able to enter player names, then hide the text boxes on 'Start'
    *   Token colors will be static (players no longer pick their color)
    *  */
    return (
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Trivial Purfuit</h1>
                </Grid>
                <Grid item xs={12}>
                    <Players>

                    </Players>
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
};

export default GameControl;
