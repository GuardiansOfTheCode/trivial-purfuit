import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import Token from '../Token/Token';
import './GameSpace.css';

// TODO: Make GameSpace a drop target
const GameSpace = (props: any) => {
    let text: string | null;
    switch (props.topic) {
        case 'Start':
            text = 'Start';
            break;
        case 'RollAgain':
            text = 'Roll Again';
            break;
        case 'NegativeSpace':
            // TODO: Make the GameSpace non-droppable
            text = null;
            break;
        default:
            text = null;
    }

    const tokens = props.players !== undefined ?
        props.players.map((player: any) => {
            return player.pos[0] === props.pos[0] && player.pos[1] === props.pos[1] ?
                <Token key={player.id}
                       color={player.tokenColor}
                       totalCakeSlices={player.totalCakeSlices}/> : null;
        }) : null;

    return (
        <Grid item>
            <Box className={'GameSpace ' + props.topic}>
                {text}
                <Box>
                    {tokens}
                </Box>
            </Box>
        </Grid>
    );
};

GameSpace.propTypes = {
    pos: propTypes.array,
    players: propTypes.array,
    topic: propTypes.string,
    cakeSlice1: propTypes.bool,
    cakeSlice2: propTypes.bool,
    cakeSlice3: propTypes.bool,
    cakeSlice4: propTypes.bool
};

export default GameSpace;
