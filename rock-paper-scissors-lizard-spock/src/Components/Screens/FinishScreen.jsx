import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'

export default function FinishScreen() {
    const navigate = useNavigate()
    const goToMainScreen = () => navigate('/')
    const location = useLocation()
    const playerScore = location?.state?.playerScore
    const computerScore = location?.state?.computerScore

    const showWinner = () =>{
        if(playerScore === computerScore){
            return "It's A Tie!"
        } if (playerScore > computerScore) {
            return "You Win!"
        } else {
            return "You Lose!"
        }
    }
  
    return (
      <div className='mainscreen text-center'>
          <h1 className='mainscreen-title'> {showWinner} </h1>
          <div className='mainscreen-menu'>
            <div className='text-center'>
                <Button onClick={goToMainScreen}> Restart Game</Button>
            </div>
          </div>
      </div>
    )
}
