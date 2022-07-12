import React from 'react'
import './Duel.css'


const Duel = ({playerOption, botOption, winner}) => {

  return (
    <div className='box-duel'>
      <div className='definitive-option'>{playerOption}</div>
      {<div className="winner-text">{winner}</div>}
      <div className='vs'>VS</div>
      <div className='definitive-option'>{botOption}</div>
    </div>
  )
}

export default Duel
