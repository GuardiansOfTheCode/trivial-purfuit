import {Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import Player from './Player/Player';

const Players = (props: any) => {
    return (
        <Grid container
              direction={'row'}
              justify={'space-evenly'}
              alignItems={'center'}>
            {
                props.players.map((player: any) => {
                    return <Player {...player}
                                   key={player.id}
                                   changeName={(event: any) => props.changeName(event, player.id)}
                                   inGame={props.inGame}/>;
                })
            }
        </Grid>
    );
};

Players.propTypes = {
    players: propTypes.array,
    changeName: propTypes.func,
    inGame: propTypes.bool
};

export default Players;
