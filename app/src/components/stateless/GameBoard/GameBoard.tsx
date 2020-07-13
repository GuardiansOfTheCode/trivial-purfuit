import React from 'react';
import {Button} from "@material-ui/core";

const gameBoard = (props: any) => {
    return (
        <div>
            <h1>Game Board</h1>
            <Button variant="contained"
                    color="primary"
                    onClick={props.clicked}>Quit Game</Button>
        </div>
    )
}

export default gameBoard;
