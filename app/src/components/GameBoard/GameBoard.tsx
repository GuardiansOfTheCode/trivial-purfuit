import React from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import propTypes from 'prop-types';
import GameSpace from "./GameSpace/GameSpace";

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
                <GameSpace pos={1} players={props.players} topic='Topic1'/>
                <GameSpace pos={2} players={props.players} topic='Topic2'/>
                <GameSpace pos={3} players={props.players} topic='RollAgain'/>
                <GameSpace pos={4} players={props.players} topic='Topic3'/>
                <GameSpace pos={5} players={props.players} topic='Topic4'/>
                <GameSpace pos={6} players={props.players} topic='Topic1'/>
                <GameSpace pos={7} players={props.players} topic='RollAgain'/>
                <GameSpace pos={8} players={props.players} topic='Topic2'/>
                <GameSpace pos={9} players={props.players} topic='Topic3'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={10} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={11} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={12} players={props.players} topic='Topic2'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={13} players={props.players} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={14} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={15} players={props.players} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={16} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={17} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={18} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={19} players={props.players} topic='Topic1'/>
                <GameSpace pos={20} players={props.players} topic='Topic2'/>
                <GameSpace pos={21} players={props.players} topic='Topic3'/>
                <GameSpace pos={22} players={props.players} topic='Topic4'/>
                <GameSpace pos={23} players={props.players} topic='Start'/>
                <GameSpace pos={24} players={props.players} topic='Topic2'/>
                <GameSpace pos={25} players={props.players} topic='Topic3'/>
                <GameSpace pos={26} players={props.players} topic='Topic4'/>
                <GameSpace pos={27} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={28} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={29} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={30} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={31} players={props.players} topic='RollAgain'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={32} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={33} players={props.players} topic='RollAgain'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={34} players={props.players} topic='Topic1'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={35} players={props.players} topic='Topic4'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace topic='NegativeSpace'/>
                <GameSpace pos={36} players={props.players} topic='Topic1'/>
            </Grid>

            <Grid container justify='center'>
                <GameSpace pos={37} players={props.players} topic='Topic2'/>
                <GameSpace pos={38} players={props.players} topic='Topic3'/>
                <GameSpace pos={39} players={props.players} topic='RollAgain'/>
                <GameSpace pos={40} players={props.players} topic='Topic4'/>
                <GameSpace pos={41} players={props.players} topic='Topic1'/>
                <GameSpace pos={42} players={props.players} topic='Topic2'/>
                <GameSpace pos={43} players={props.players} topic='RollAgain'/>
                <GameSpace pos={44} players={props.players} topic='Topic3'/>
                <GameSpace pos={45} players={props.players} topic='Topic4'/>
            </Grid>
        </Paper>
    )
}

GameBoard.propTypes = {
    players: propTypes.array,
    clicked: propTypes.func
}

export default GameBoard;
