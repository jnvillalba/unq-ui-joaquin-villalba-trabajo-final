import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Duel from './Duel'
import './GameScreen.css'

import { handsList } from '../Hands/handsList'
import Hand from '../Hands/Hand'
import Score from '../Score'

export default function GameScreen() {

    const [player, setPlayer] = useState()
    const [playerHand, setPlayerHand] = useState(null)
    const [computerHand, setComputerHand] = useState('')
    const [gameState, setGameState] = useState()
    const [score, setScore] = useState(0)

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        console.log("PC: " + randomHand)
        return randomHand 
    }

    const handleSelect = (pick) => {
        setPlayerHand(pick);
        setComputerHand(randomComputerHand());  
    }

  return (
    <div className='gamescreen'>
        <Score/>

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
