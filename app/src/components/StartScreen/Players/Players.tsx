import {Grid} from '@material-ui/core';
import propTypes from 'prop-types';
import React, {useContext} from 'react';
import GameContext from '../../../contexts/GameContext';
import Player from './Player/Player';

const Players = (props: any) => {
    const gameState = useContext(GameContext);

    // TODO: update to implement changin player names
    return (
        <Grid container
              direction="row"
              justify="space-evenly"
              alignItems="center">
            {
                gameState.players.map((player: any) => {
                    return <Grid item xs={12}><Player {...player}/></Grid>
                                   // key={player.id}
                                   // changeName={(event: any) => props.changeName(event, player.id)}/>;
                })
            }
        </Grid>
    );
};

Players.propTypes = {
    players: propTypes.array,
    changeName: propTypes.func
};

export default Players;
