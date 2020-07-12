import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import './App.css';
import Player from './components/Player/Player';

const App = () => {
  const [gameState, setGameState] = useState({
    players: [
        {name: 'John', tokenColor: 'red'},
        {name: 'Jack', tokenColor: 'yellow'},
        {name: 'Jerry', tokenColor: 'green'},
        {name: 'James', tokenColor: 'blue'}
      ]
    });
    const [showPlayers, toggleShowPlayers] = useState(true);

    const toggleShowPlayersHandler = () => {
    toggleShowPlayers(!showPlayers);
    }

  const players = showPlayers ?
    <div>
        {gameState.players.map((player) => {
            return <Player {...player}
                           key={player.name}/>
        })}
    </div> : null;

    return (
        <div className="App">
            <h1>Welcome to Trivial Purfuit</h1>
            <div>
              <Button variant='contained' onClick={toggleShowPlayersHandler}>
                Toggle Players
              </Button>
               {players}
            </div>
            <div>
              <Button variant= 'contained'>
                  Enter Questions and Answers
                </Button>
            </div>
        </div>
    );
}

export default App;
