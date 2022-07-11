import React, {useState } from 'react'
import './Duel.css'
import { handsList } from '../Hands/handsList'

const Duel = ({playerOption, botOption, figth, winner}) => {
  const [showWinner, setShowWinner] = useState(true);

  const showW = () => {
    if(winner === null){
      setShowWinner(false)

    }
  }

  /*const showButtonAndFight = () => {
    /*if (!playerOption ){
      setShowButton(true)
      return
    }
    figth()
    botOption: randomComputerHand() 
  }*/

  return (
    <div className='box-duel'>
      <div className='definitive-option'>{playerOption}</div>
      { showW && showWinner && <div className="winner-text">{winner} </div>}
      <div className='vs'>VS
        {/*<div className="vertical-center">
          {<button className='btn-circle btn-figth' 
              onClick={() => {figth()}}> Fight! </button>}
        </div>*/}
      </div>
      <div className='definitive-option'>{botOption}</div>
    </div>

  )
}

export default Duel
