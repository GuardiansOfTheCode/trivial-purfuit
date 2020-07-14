import React from 'react';
import {Grid} from '@material-ui/core';
import './Players.css';
import Player from './Player/Player';
import propTypes from 'prop-types';

const Players = (props: any) => {
    return (
        <Grid className="Players"
              container
              direction="row"
              justify="space-evenly"
              alignItems="center">
            {props.players.map((player: any) => {
                return <Player {...player}
                               key={player.id}
                               changeName={(event: any) => props.changeName(event, player.id)}/>
            })}
        </Grid>
    )
}

Players.propTypes = {
    players:    propTypes.array,
    changeName: propTypes.func
}

export default Players;
