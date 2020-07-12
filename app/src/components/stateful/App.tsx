import React, {useState} from 'react';
import './App.css';
import StartScreen from '../stateless/StartScreen/StartScreen';

const App = () => {
    const [showStartScreen, toggleShowStartScreen] = useState(true);

    const [playerState, setPlayerState] = useState({
        players: [
            {name: 'Player 1', tokenColor: 'red'},
            {name: 'Player 2', tokenColor: 'yellow'},
            {name: 'Player 3', tokenColor: 'green'},
            {name: 'Player 4', tokenColor: 'blue'}
        ]
    });

    const toggleShowStartScreenHandler = () => {
        toggleShowStartScreen(!showStartScreen);
    }

    const startScreen = showStartScreen ?
        <StartScreen players={playerState.players}
                     clicked={() => toggleShowStartScreenHandler()}/> : null;
    return (
        <div className="App">
            {startScreen}
        </div>
    );
}

export default App;
