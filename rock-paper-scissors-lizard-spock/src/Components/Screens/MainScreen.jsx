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
        <div className='mainscreen-menu'>
            <Button onClick={goToGameScreen}>Start</Button>
        </div>
    </div>
  )
}
