import React from 'react'
import { Button, Alert} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Duel from './Duel'
import './GameScreen.css'

import { handsList } from '../Hands/handsList'
import Hand from '../Hands/Hand'
import Score from '../Score'
import Rules from '../Rules'

export default function GameScreen() {

    //const [gameState, setGameState] = useState()
    //const [player, setPlayer] = useState()
    const [playerHand, setPlayerHand] = useState(null)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerHand, setComputerHand] = useState('')
    const [computerScore, setComputerScore] = useState(0)

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        console.log("PC: " + randomHand)
        return randomHand 
    }

     
    const winAlert = () =>{
        <Alert variant='success'> Player Win </Alert> 
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
    }

    const handleSelect = (hand) => {
        setPlayerHand(hand);
        setComputerHand(randomComputerHand());
        fight()  
    }

  return (
    <div className='gamescreen'>
        <Score 
            playerScore ={playerScore}
            computerScore ={computerScore}
        />

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

        <div className='text-center'>
            <Button> Restart Game</Button>
        </div>

        
    </div>
  )
}
