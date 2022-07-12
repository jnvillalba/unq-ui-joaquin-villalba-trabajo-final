import React, {useState } from 'react'
import './Duel.css'
import { handsList } from '../Hands/handsList'

const Duel = ({playerOption, botOption, winner}) => {
  const [showWinner, setShowWinner] = useState(true);

  return (
    <div className='box-duel'>
      <div className='definitive-option'>{playerOption}</div>
      {<div className="winner-text">{winner} </div>}
      <div className='vs'>VS

      </div>
      <div className='definitive-option'>{botOption}</div>
    </div>

  )
}

export default Duel
