import React from 'react';
import './Player.css';
import {Paper} from '@material-ui/core';

const player = (props: any) => {
    return (
        <Paper className='Player'>
            <p>Name: {props.name}  TokenColor: {props.tokenColor}</p>
            <input type='text'
                   onChange={props.changeName}
                   defaultValue={props.name}/>
        </Paper>
    )
}

export default player;
