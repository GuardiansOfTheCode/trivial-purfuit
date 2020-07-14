import React from 'react';
import './GameSpace.css';
import {Box, Grid} from "@material-ui/core";

const GameSpace = (props: any) => {
    let text: string | null = null;
    switch (props.topic) {
        case 'Start':
            text = 'Start';
            break;
        case 'RollAgain':
            text = 'RollAgain';
            break;
    }

    return (
        <Grid item>
            <Box className={'GameSpace ' + props.topic}>{text}</Box>
        </Grid>
    )
}

export default GameSpace;