import {Box, Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import CakeSlice from './CakeSlice/CakeSlice';
import './Player.css';

const Player = (props: any) => {
    const notInGameComponent =
        <Grid item xs={12}>
            <Box className={'Player' + props.id}>
                <p>Name: {props.name}</p>
                <input type='text'
                       onChange={props.changeName}
                       placeholder={'Enter name'}/>
            </Box>
        </Grid>;

    const inGameComponent = props.currentPlayer ?
        <Grid item xs={12}>
            <Box className={'Player' + props.id + 'Current'}>
                <p>{props.name}</p>
                <CakeSlice cakeSlice1={props.cakeSlice1}
                           cakeSlice2={props.cakeSlice2}
                           cakeSlice3={props.cakeSlice3}
                           cakeSlice4={props.cakeSlice4}/>
            </Box>
        </Grid> :
        <Grid item xs={12}>
            <Box className={'Player'+props.id}>
                <p>{props.name}</p>
                <CakeSlice cakeSlice1={props.cakeSlice1}
                           cakeSlice2={props.cakeSlice2}
                           cakeSlice3={props.cakeSlice3}
                           cakeSlice4={props.cakeSlice4}/>
            </Box>
        </Grid>;

    const component = props.inGame ? inGameComponent : notInGameComponent;

    return (component);
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
    changeName: propTypes.func,
    inGame: propTypes.bool
};

export default Player;
