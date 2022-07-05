import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Duel from './Duel'
import './GameScreen.css'

import { handsList } from '../Hands/handsList'
import Hand from '../Hands/Hand'
import Score from '../Score'

export default function GameScreen() {
  return (
    <div className='gamescreen'>
        <Score/>
        
        <Duel
            //playerOption={gameState.playerOption} 
            //botOption={gameState.botOption}  
        />

        <div>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands'>
                <div className='hand'>
                { 
                    handsList.map((hand) => (
                        <Hand key={hand.id} image={hand.image} name={hand.name}/>
                    ))
                }
                </div>    
            </div>
        </div>
        
        <div className='text-center'>
            <Button> Restart Game</Button>
        </div>

        
    </div>
  )
}
