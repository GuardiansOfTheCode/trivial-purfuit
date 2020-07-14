import React from 'react';
import propTypes from 'prop-types';

// TODO: Make Token draggable and droppable
const Token = (props: any) => {
    return (
        <div>
            Token
        </div>
    )
}

Token.propTypes = {
    color: propTypes.string,
    numCakeSlices: propTypes.number
}

export default Token;
