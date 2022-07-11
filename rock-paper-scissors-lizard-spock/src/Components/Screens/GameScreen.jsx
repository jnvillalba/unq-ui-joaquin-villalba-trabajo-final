import React from 'react'
import { Button, Alert} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Duel from './Duel'
import './GameScreen.css'

import { handsList } from '../Hands/handsList'
import Hand from '../Hands/Hand'
import Score from '../Score'
import Rules from '../Rules'
import { useLocation, useNavigate} from 'react-router-dom'

export default function GameScreen() {

    const [playerHand, setPlayerHand] = useState(null)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerHand, setComputerHand] = useState('')
    const [computerScore, setComputerScore] = useState(0)
    const [actualRound, setActualRound] = useState(1)
    const location = useLocation()
    const maxRounds = location?.state?.rounds
    const navigate = useNavigate()
    const goToGameScreen = () => navigate('/FinishScreen',{state:{playerScore, computerScore}})

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        console.log("PC: " + randomHand)
        return randomHand 
    }
     
    const winAlert = () =>{
        return <Alert variant='success'> Player Win </Alert> 
    }

    const loseAlert = () =>{
        <Alert variant='danger'> Computer Win </Alert>
    }

    const tieAlert = () =>{
        <Alert variant='warning'> Tie, select again </Alert>
    }

    const fight = () => {
        var winner = Rules.getWinner(playerHand,computerHand);
        if (winner === playerHand){
            winAlert()
            setPlayerScore(playerScore+1)
            
        }if((winner === computerHand)){
            loseAlert()
            setComputerScore(computerScore+1)
        }if((winner = 0)){
            tieAlert()
        }
        setActualRound(actualRound+1)
    }

    const handleSelect = (hand) => {
        setPlayerHand(hand);
        setComputerHand(randomComputerHand());
        fight()  
    }

    const finishGame = () => {
        if ({actualRound} == {maxRounds}) {
            goToGameScreen()
        }
    }

  return (
    <div className='gamescreen'>
        <Score 
            playerScore ={playerScore}
            computerScore ={computerScore}
        />

        <h1 className='text-center'> Rounds {actualRound} of {maxRounds}</h1>

        <Duel
            playerOption = {playerHand}
            botOption = {computerHand}
        />

        <div className='hands-container'>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands'>
                { 
                    handsList.map((hand) => (
                        <Hand key={hand.id} image={hand.image} 
                            name={hand.name} setAHand={handleSelect}
                        />
                    ))
                }   
            </div>
        </div> 

        {finishGame}
        
    </div>
  )
}
