import { Button } from 'react-bootstrap'
import React from 'react'

export default function MainScreen(props) {
  return (
    <div className='mainscreen text-center'>
        <h1 className='mainscreen--title'> Rock, Paper, Scissors, Lizard, Spock </h1>
        <div className='mainscreen--menu'>
            <Button onClick={() => props.setStart(1)}>Start</Button>

        </div>
    </div>
  )
}
