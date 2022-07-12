import React from 'react'
import { Table } from 'react-bootstrap'
import {useNavigate, useLocation} from 'react-router-dom'

export default function FinishScreen() {
    const navigate = useNavigate()
    const goToMainScreen = () => navigate('/')
    const location = useLocation()
    const playerScore = parseInt(location?.state?.playerScore)
    const computerScore = parseInt(location?.state?.computerScore)

    let showWinner
    if(playerScore === computerScore){
        showWinner =  "It's A Tie!"
    } if (playerScore > computerScore) {
        showWinner =  "You Win!"
    } if (playerScore < computerScore) {
        showWinner =  "You Lose!"
    }
    
    return (
        <div className='mainscreen text-center'>
            <h1 className='mainscreen-title'> {showWinner} </h1>
            <h2 className='text-center'>Final Score:</h2>
            <Table className='table-final-scores'>
                <tbody>
                    <tr>
                        <td>Player</td>
                        <td className='td'>{playerScore}</td>
                    </tr>
                    <tr>
                        <td>Computer</td>
                        <td className='td'>{computerScore}</td>
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
