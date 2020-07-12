import React from 'react';
import './Player.css';
import {Paper} from '@material-ui/core';

const player = (props: any) => {
    return (
        <div className='Player'>
            <p>Name: {props.name}</p>
            <input type='text'
                   onChange={props.changeName}
                   defaultValue={props.name}/>
        </div>
    )
}

export default player;
