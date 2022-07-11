import { Button } from 'react-bootstrap'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './MainScreen.css'

export default function MainScreen(props) {

  const navigate = useNavigate()
  const goToGameScreen = () => navigate('/GameScreen')
  
  return (
    <div className='mainscreen text-center'>
        <h1 className='mainscreen-title'> Rock, Paper, Scissors, Lizard, Spock </h1>
        <div> 
          <img className='gameLogo' src="https://www.pngkey.com/png/full/926-9261970_rock-paper-scissors-lizard-spock-is-a-funny.png" 
                alt="gameLogo" />
        </div>
        <div className='mainscreen-menu'>
            <Button onClick={goToGameScreen}>Start</Button>
        </div>
    </div>
  )
}
