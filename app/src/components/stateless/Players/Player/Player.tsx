import React from 'react';
import {Grid} from '@material-ui/core';
import './Player.css';

const player = (props: any) => {
    return (
        <Grid className='Player'>
            <p>Name: {props.name}</p>
            <input type='text'
                   onChange={props.changeName}
                   placeholder={'Enter name'}/>

            <p>TokenColor: {props.tokenColor}</p>
            <input type='text'
                   // onChange={props.changeName}
                   placeholder={'Enter token color'}/>
        </Grid>
    )
}

export default player;
