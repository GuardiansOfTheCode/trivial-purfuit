import React from 'react';
import {Grid} from '@material-ui/core';
import './Player.css';

const player = (props: any) => {
    return (
        <Grid className='Player'>
            <div>
                <p>Name: {props.name}</p>
                <input type='text'
                       onChange={props.changeName}
                       placeholder={'Enter name'}/>
            </div>

            <div>
                <p>TokenColor: {props.tokenColor}</p>
                <input type='text'
                       placeholder={'Enter token color'}/>
            </div>
        </Grid>
    )
}

export default player;
