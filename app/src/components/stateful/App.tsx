import React, {useState} from 'react';
import './App.css';
import StartScreen from '../stateless/StartScreen/StartScreen';

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({
        players: [
            {id: 1, name: 'Player 1', tokenColor: 'red'},
            {id: 2, name: 'Player 2', tokenColor: 'yellow'},
            {id: 3, name: 'Player 3', tokenColor: 'green'},
            {id: 4, name: 'Player 4', tokenColor: 'blue'}
        ]
    });

    const changeNameHandler = (event: any, id: number) => {
        console.log(JSON.stringify(event.target.value));
        const copyPlayers = [...playerState.players];
        const playerIndex = copyPlayers.findIndex(player => player.id === id);
        const copyPlayer = copyPlayers[playerIndex];
        copyPlayer.name = event.target.value;
        copyPlayers[playerIndex] = copyPlayer;
        setPlayerState({players: copyPlayers});
    }

    const toggleShowStartScreenHandler = () => {
        toggleShowStartScreen(!showStartScreen);
    }

    const startScreen = showStartScreen ?
        <StartScreen players={playerState.players}
                     changeName={changeNameHandler}
                     clicked={() => toggleShowStartScreenHandler()} /> : null;
    return (
        <div className="App">
            {startScreen}
        </div>
    );
}

export default App;
