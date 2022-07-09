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

    const [gameState, setGameState] = useState()
    const [player, setPlayer] = useState()
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
        var winner = Rules(playerHand,computerHand);
        if (winner = playerHand){
            setPlayerScore(playerScore+1)
            winAlert()
        }if((winner = computerHand)){
            setComputerScore(computerScore+1)
            loseAlert()
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

        <div>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands'>
                <div className='hand'>
                { 
                    handsList.map((hand) => (
                        <Hand key={hand.id} image={hand.image} 
                            name={hand.name} setAnItem={handleSelect}
                        />
                    ))
                }
                </div>    
            </div>
        </div>


        {randomComputerHand}
        
        <div className='text-center'>
            <Button> Restart Game</Button>
        </div>

        
    </div>
  )
}
