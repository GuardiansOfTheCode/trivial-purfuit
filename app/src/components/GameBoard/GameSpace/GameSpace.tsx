import React from 'react';
import './GameSpace.css';
import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';

// TODO: Make GameSpace a drop target
const GameSpace = (props: any) => {
    let text: string | null;
    switch (props.topic) {
        case 'Start':
            text = 'Start';
            break;
        case 'RollAgain':
            text = 'RollAgain';
            break;
        default:
            text = null;
            //make not droppable
    }

    const tokensOnSpace: boolean = false;

    return (
        <Grid item>
            <Box className={'GameSpace ' + props.topic}>
                {text}
            </Box>
        </Grid>
    )
}

GameSpace.propTypes = {
    pos: propTypes.number,
    players: propTypes.array,
    topic: propTypes.string
}

export default GameSpace;
