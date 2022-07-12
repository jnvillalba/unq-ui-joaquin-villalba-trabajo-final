import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'

export default function FinishScreen() {
    const navigate = useNavigate()
    const goToMainScreen = () => navigate('/')
    const location = useLocation()
    const playerScore = parseInt(location?.state?.playerScore)
    const computerScore = parseInt(location?.state?.computerScore)
    //const playerScore =location?.state?.playerScore
    //const computerScore = location?.state?.computerScore
    console.log( "Finish Score Player " + playerScore)
    console.log( "Finish Score PC " + computerScore)

    let showWinner
    if(playerScore === computerScore){
        showWinner =  ( <h1>It's A Tie!</h1> )
    } if (playerScore > computerScore) {
        showWinner =  ( <h1>You Win!</h1> )
    } if (playerScore < computerScore) {
        showWinner =  (<h1>You Lose!</h1>)
    }
    
    return (
      <div className='mainscreen text-center'>
          <h1 className='mainscreen-title'> {showWinner} </h1>
          <h2 className='mainscreen-title'> Player Score: {playerScore} </h2>
          <h2 className='mainscreen-title'>Computer Score: {computerScore} </h2>
          <div className='mainscreen-menu'>
            <div className='text-center'>
                <Button onClick={goToMainScreen}> Restart Game</Button>
            </div>
          </div>
      </div>
    )
}
