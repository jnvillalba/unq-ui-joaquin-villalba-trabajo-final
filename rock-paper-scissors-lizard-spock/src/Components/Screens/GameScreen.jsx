import React from 'react'
import { Button } from 'react-bootstrap'

export default function GameScreen() {
  return (
    <div className='gamescreen'>
        <div className='gamescreen--players grid grid-2'>
            <div className='gamescreen--player'>Player:</div>
            <div className='gamescreen--player text-right'>Computer:</div>
        </div>
        <div className='gamescreen--hands grid grid-4'>
            hands
        </div>
        <div className='text-center'>
            <Button> Restart Game</Button>
        </div>

        
    </div>
  )
}
