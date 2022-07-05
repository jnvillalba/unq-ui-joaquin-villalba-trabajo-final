import './App.css';
import {useEffect, useState} from 'react';
import MainScreen from './Components/Screens/MainScreen';
import GameScreen from './Components/Screens/GameScreen';

function App() {

  const[stateGame, setStateGame] = useState(0)

  const changeStateGame = (value) => {
    setStateGame(value)
  }

  return(
    <div className='app'>
      { stateGame === 0 ?
        <MainScreen
          setStart = {changeStateGame}
        /> : <GameScreen/>
      }
      
    </div>

  )

}

export default App;

/*
*Player
-Elegir jugada
-ver puntuacion
*Computer
-elegir random mano
*/