import React from 'react';
import Player from "./Player/Player";

const players = (props: any) => {
    return props.players.map((player: any) => <Player {...player} key={player.name}/>);
}

export default players;
