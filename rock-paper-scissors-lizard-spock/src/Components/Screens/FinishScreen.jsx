import React from 'react'
import { Button, Table } from 'react-bootstrap'
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
          <h2 className='text-center'>Final Score:</h2>
          <Table className='table-final-scores'>
           
            <tbody>
                <tr>
                    <td>Player</td>
                    <td>{playerScore}</td>
                </tr>
                <tr>
                    <td>Computer</td>
                    <td>{computerScore}</td>
                </tr>
            </tbody>
          </Table>
          <div className='mainscreen-menu'>
            <div className='text-center'>
                <button className='mainButton' onClick={goToMainScreen}> Restart Game</button>
            </div>
          </div>
      </div>
    )


}
