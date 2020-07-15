import BorderOuterIcon from '@material-ui/icons/BorderOuter';
import propTypes from 'prop-types';
import React from 'react';

// TODO: Make Token draggable and droppable
const Token = (props: any) => {
    return (
        <BorderOuterIcon/>
    );
};

Token.propTypes = {
    color: propTypes.string,
    totalCakeSlices: propTypes.number
};

export default Token;
