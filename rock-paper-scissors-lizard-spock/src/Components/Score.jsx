import React from 'react'

export default function Score({playerScore, computerScore}) {
  return (
    <div className='gamescreen-players '>
       <div className='gamescreen-player'>Player: {playerScore}</div>
      <div className='gamescreen-player text-right'>Computer: {computerScore}</div>
    </div>
  )
}
