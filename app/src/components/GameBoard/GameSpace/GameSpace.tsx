import React from 'react';
import {Box, Paper} from "@material-ui/core";
import propTypes from 'prop-types';
import './GameSpace.css';

const GameSpace = (props: any) => {
    return (
        <Paper>
            <Box className={'GameSpace ' + props.topic}>Oi cunt</Box>
        </Paper>
    )
}

export default GameSpace;
