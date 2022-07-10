import React from 'react'
import './Score.css'

export default function Score({playerScore, computerScore}) {
  return (
    <div className='score-players '>
       <div className='score-player'>Player: {playerScore}</div>
      <div className='score-player text-right'>Computer: {computerScore}</div>
    </div>
  )
}
