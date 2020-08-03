import {Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import './Player.css';

const Player = (props: any) => {
// TODO:  Update to use context
    return (
        <Grid item xs={3}
              className='Player'>
            <span>
                <p>{props.name}</p>
                <input type='text'
                       onChange={props.changeName}
                       placeholder={'Enter name'}/>
            </span>

            <span>
                <p>{props.tokenColor}</p>
            </span>
        </Grid>
    );
};

Player.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    tokenColor: propTypes.string,
    pos: propTypes.array,
    numQuestions: propTypes.number,
    numCorrect: propTypes.number,
    totalCakeSlices: propTypes.number,
    cakeSlice1: propTypes.bool,
    cakeSlice2: propTypes.bool,
    cakeSlice3: propTypes.bool,
    cakeSlice4: propTypes.bool,
    changeName: propTypes.func
};

export default Player;
