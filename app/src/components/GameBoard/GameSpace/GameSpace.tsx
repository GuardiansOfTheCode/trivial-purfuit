import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import './GameSpace.css';
import './Token.css';

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
            text = null;
            break;
        default:
            text = null;
    }

    const handleDragStart = (event: any, player: any) => {
        event.dataTransfer.setData('playerId', player.id);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const tokens = props.players !== undefined ?
        props.players.map((player: any) => {
            return player.pos[0] === props.pos[0] && player.pos[1] === props.pos[1] ?
                <Box key={player.id}
                     className={'Token Token' + player.id}
                     draggable={props.inGame && player.id === props.currentPlayer}
                     onDragStart={event => handleDragStart(event, player)}/> : null;
        }) : null;

    let cakeSlice: number = 0;
    if (props.cakeSlice1) {
        cakeSlice = 1;
    } else if (props.cakeSlice2) {
        cakeSlice = 2;
    } else if (props.cakeSlice3) {
        cakeSlice = 3;
    } else if (props.cakeSlice4) {
        cakeSlice = 4;
    }

    return (
        <Grid item>
            <Box className={'GameSpace ' + props.topic}
                 onDrop={event => props.handleDrop(event, props.pos, props.topic, cakeSlice)}
                 onDragOver={event => handleDragOver(event)}>

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
    cakeSlice4: propTypes.bool,
    handleDrop: propTypes.func,
    currentPlayer: propTypes.number
};

export default GameSpace;
