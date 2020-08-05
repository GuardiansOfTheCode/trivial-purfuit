import {Box} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import './Token.css';

// TODO: Make Token draggable and droppable
const Token = (props: any) => {
    return (
        <Box className={'Token ' + 'Token' + props.playerId}>

        </Box>
    );
};

Token.propTypes = {
    playerId: propTypes.number,
    color: propTypes.string,
    totalCakeSlices: propTypes.number
};

export default Token;
