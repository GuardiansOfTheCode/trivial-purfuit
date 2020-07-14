import React from 'react';
import './GameSpace.css';
import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import Token from "../Token/Token";

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
        case 'NegativeSpace':
            // TODO: Make the GameSpace non-droppable
            text = null;
            break;
        default:
            text = null;
    }

    const tokens = props.players !== undefined ?
        props.players.map((player: any) => {
            return player.pos === props.pos ?
                <Token key={player.id}
                       color={player.tokenColor}
                       totalCakeSlices={player.totalCakeSlices}/> : null;
        }) : null;

    return (
        <Grid item>
            <Box className={'GameSpace ' + props.topic}>
                {text}
                {tokens}
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
