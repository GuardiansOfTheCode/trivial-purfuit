import React, {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import './Player.css';
import propTypes from 'prop-types';

const Player = (props: any) => {
    useEffect(() => console.log(`[Player] props: ${JSON.stringify(props)}`));
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

Player.propTypes = {
    id:         propTypes.number,
    name:       propTypes.string,
    tokenColor: propTypes.string,
    pos:        propTypes.number,
    changeName: propTypes.func,
    cakeSlices: propTypes.number
}

export default Player;
