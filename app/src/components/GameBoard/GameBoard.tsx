import React from 'react';
import {Button, Grid, Paper} from '@material-ui/core';
import propTypes from 'prop-types';
import GameSpace from './GameSpace/GameSpace';

const GameBoard = (props: any) => {
    return (
        <Paper>

            {/*TODO: Move this logic into a navbar*/}
            <div>
                <h1>Trivial Pursuit</h1>
                <Button variant='contained'
                        color='primary'
                        onClick={props.clicked}>
                    Quit Game
                </Button>
            </div>

            {/*TODO: Consider using context rather than passing in props to each GameSpace component*/}
            <Grid container justify='center'>
                <GameSpace pos={[0,0]} players={props.players} topic='Topic1' cakeSlice1={true}/>
                <GameSpace pos={[0,1]} players={props.players} topic='Topic2'/>
                <GameSpace pos={[0,2]} players={props.players} topic='RollAgain'/>
                <GameSpace pos={[0,3]} players={props.players} topic='Topic3'/>
                <GameSpace pos={[0,4]} players={props.players} topic='Topic4'/>
                <GameSpace pos={[0,5]} players={props.players} topic='Topic1'/>
                <GameSpace pos={[0,6]} players={props.players} topic='RollAgain'/>
                <GameSpace pos={[0,7]} players={props.players} topic='Topic2'/>
                <GameSpace pos={[0,8]} players={props.players} topic='Topic3' cakeSlice2={true}/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[1,0]} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[1,4]} players={props.players} topic='Topic2'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[1,8]} players={props.players} topic='Topic4'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[2,0]} players={props.players} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[2,4]} players={props.players} topic='Topic3'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[2,8]} players={props.players} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[3,0]} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[3,4]} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[3,8]} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[4,0]} players={props.players} topic='Topic1'/>
                <GameSpace pos={[4,1]} players={props.players} topic='Topic2'/>
                <GameSpace pos={[4,2]} players={props.players} topic='Topic3'/>
                <GameSpace pos={[4,3]} players={props.players} topic='Topic4'/>
                <GameSpace pos={[4,4]} players={props.players} topic='Start'/>
                <GameSpace pos={[4,5]} players={props.players} topic='Topic2'/>
                <GameSpace pos={[4,6]} players={props.players} topic='Topic3'/>
                <GameSpace pos={[4,7]} players={props.players} topic='Topic4'/>
                <GameSpace pos={[4,8]} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[5,0]} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[5,4]} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[5,8]} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[6,0]} players={props.players} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[6,4]} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[6,8]} players={props.players} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[7,0]} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[7,4]} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={[7,8]} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={[8,0]} players={props.players} topic='Topic2' cakeSlice3={true}/>
                <GameSpace pos={[8,1]} players={props.players} topic='Topic3'/>
                <GameSpace pos={[8,2]} players={props.players} topic='RollAgain'/>
                <GameSpace pos={[8,3]} players={props.players} topic='Topic4'/>
                <GameSpace pos={[8,4]} players={props.players} topic='Topic1'/>
                <GameSpace pos={[8,5]} players={props.players} topic='Topic2'/>
                <GameSpace pos={[8,6]} players={props.players} topic='RollAgain'/>
                <GameSpace pos={[8,7]} players={props.players} topic='Topic3'/>
                <GameSpace pos={[8,8]} players={props.players} topic='Topic4' cakeSlice4={true}/>
            </Grid>
        </Paper>
    );
};

GameBoard.propTypes = {
    players: propTypes.array,
    clicked: propTypes.func
};

export default GameBoard;
