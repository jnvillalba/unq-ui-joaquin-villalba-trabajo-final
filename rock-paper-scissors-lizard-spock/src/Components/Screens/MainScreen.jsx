import { Button} from 'react-bootstrap'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './MainScreen.css'
import { useState } from 'react'

export default function MainScreen() {

  const[ rounds, setRounds] = useState(1)

  const navigate = useNavigate()
  const goToGameScreen = () => navigate('/GameScreen' , {state:{rounds}})

  return (
    <div className='mainscreen text-center'>
        <h1 className='mainscreen-title'> Rock, Paper, Scissors, Lizard, Spock </h1>
        <div> 
          <img className='gameLogo' src="https://www.pngkey.com/png/full/926-9261970_rock-paper-scissors-lizard-spock-is-a-funny.png" 
                alt="gameLogo" />
        </div>
        <div className='mainscreen-menu'>
          <div className='rounds-selector'>
            <p> Select number of rounds </p>
            <input className='rounds' type="number" value={rounds} onChange={(e) => setRounds(e.target.value)}
             min="1" max="100"></input>
          </div> 
          <Button onClick={goToGameScreen}>Start</Button>
        </div>
    </div>
  )
}
