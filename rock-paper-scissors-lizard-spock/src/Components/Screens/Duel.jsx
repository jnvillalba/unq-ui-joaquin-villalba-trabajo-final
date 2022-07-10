import React from 'react'
import './Duel.css'

const Duel = ({playerOption, botOption}) => {
  return <div className='box-duel'>
    <div className='definitive-option'>{ playerOption}</div>
    <div className='vs'>Vs</div>
    <div className='definitive-option'>{botOption}</div>
  </div>
}

export default Duel
