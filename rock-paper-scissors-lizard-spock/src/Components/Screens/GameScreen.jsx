import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Duel from './Duel'

import { handsList } from '../Hands/handsList'
import Hand from '../Hands/Hand'

export default function GameScreen() {
  return (
    <div className='gamescreen'>
        
        <div className='gamescreen--players grid grid-2'>
            <div className='gamescreen--player'>Player:</div>
            <div className='gamescreen--player text-right'>Computer:</div>
        </div>

        <Duel
            //playerOption={gameState.playerOption} 
            //botOption={gameState.botOption}  
        />

        <div>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands grid grid-4'>
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
