import React from 'react';
import {Grid} from '@material-ui/core';
import './Players.css';
import Player from './Player/Player';

const players = (props: any) => {
    return (
        <Grid className="Players"
              container
              direction="row"
              justify="space-evenly"
              alignItems="center">
            {props.players.map((player: any) => {
                return <Player {...player}
                               key={player.name}
                               changeName={(event: any) => props.changeName(event, player.id)}
                />
            })}
        </Grid>
    )
}

export default players;
