import {Grid, Paper} from '@material-ui/core';
import propTypes from 'prop-types';
import React from 'react';
import GameSpace from './GameSpace/GameSpace';

const GameBoard = (props: any) => {
    return (
        <Paper>
            {/*TODO: Consider using context rather than passing in props to each GameSpace component*/}
            <Grid container justify='center'>
                <GameSpace {...props} pos={[0, 0]} topic='CakeSpace1' cakeSlice1={true}/>
                <GameSpace {...props} pos={[0, 1]} topic='Topic2'/>
                <GameSpace {...props} pos={[0, 2]} topic='RollAgain'/>
                <GameSpace {...props} pos={[0, 3]} topic='Topic3'/>
                <GameSpace {...props} pos={[0, 4]} topic='Topic4'/>
                <GameSpace {...props} pos={[0, 5]} topic='Topic1'/>
                <GameSpace {...props} pos={[0, 6]} topic='RollAgain'/>
                <GameSpace {...props} pos={[0, 7]} topic='Topic2'/>
                <GameSpace {...props} pos={[0, 8]} topic='CakeSpace3' cakeSlice3={true}/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[1, 0]} topic='Topic3'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[1, 4]} topic='Topic3'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[1, 8]} topic='Topic4'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[2, 0]} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[2, 4]} topic='Topic2'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[2, 8]} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[3, 0]} topic='Topic4'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[3, 4]} topic='Topic1'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[3, 8]} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[4, 0]} topic='Topic1'/>
                <GameSpace {...props} pos={[4, 1]} topic='Topic2'/>
                <GameSpace {...props} pos={[4, 2]} topic='Topic3'/>
                <GameSpace {...props} pos={[4, 3]} topic='Topic4'/>
                <GameSpace {...props} pos={[4, 4]} topic='Start'/>
                <GameSpace {...props} pos={[4, 5]} topic='Topic2'/>
                <GameSpace {...props} pos={[4, 6]} topic='Topic3'/>
                <GameSpace {...props} pos={[4, 7]} topic='Topic4'/>
                <GameSpace {...props} pos={[4, 8]} topic='Topic2'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[5, 0]} topic='Topic2'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[5, 4]} topic='Topic3'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[5, 8]} topic='Topic3'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[6, 0]} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[6, 4]} topic='Topic2'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[6, 8]} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[7, 0]} topic='Topic3'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[7, 4]} topic='Topic1'/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace topic='NegativeSpace' handleDrop={() => {}}/>
                <GameSpace {...props} pos={[7, 8]} topic='Topic4'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace {...props} pos={[8, 0]} topic='CakeSpace4' cakeSlice4={true}/>
                <GameSpace {...props} pos={[8, 1]} topic='Topic1'/>
                <GameSpace {...props} pos={[8, 2]} topic='RollAgain'/>
                <GameSpace {...props} pos={[8, 3]} topic='Topic2'/>
                <GameSpace {...props} pos={[8, 4]} topic='Topic3'/>
                <GameSpace {...props} pos={[8, 5]} topic='Topic4'/>
                <GameSpace {...props} pos={[8, 6]} topic='RollAgain'/>
                <GameSpace {...props} pos={[8, 7]} topic='Topic1'/>
                <GameSpace {...props} pos={[8, 8]} topic='CakeSpace2' cakeSlice2={true}/>
            </Grid>
        </Paper>
    );
};

GameBoard.propTypes = {
    players: propTypes.array,
    handleDrop: propTypes.func,
    onClickFetchRandomQuestion: propTypes.func,
    inGame: propTypes.bool,
    currentPlayer: propTypes.number
};

export default GameBoard;
