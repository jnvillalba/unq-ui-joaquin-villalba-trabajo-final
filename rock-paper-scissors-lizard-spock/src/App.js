import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import MainScreen from './Components/Screens/MainScreen';
import GameScreen from './Components/Screens/GameScreen';
import FinishScreen from './Components/Screens/FinishScreen';

function App() {

  return(
    <>

    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen/>} />
        <Route exact path='/GameScreen' element={<GameScreen/>} />
        <Route exact path='/FinishScreen' element={<FinishScreen/>} />
      </Routes>
    </BrowserRouter>
    
    </>
    

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

/**<div className='app'>
      { stateGame === 0 ?
        <MainScreen
          setStart = {changeStateGame}
        /> : <GameScreen/>
      }
      
    </div> */

    ///