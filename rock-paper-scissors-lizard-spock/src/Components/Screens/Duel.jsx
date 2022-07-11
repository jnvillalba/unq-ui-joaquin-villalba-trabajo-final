import React, {useState } from 'react'
import './Duel.css'
import { handsList } from '../Hands/handsList'

const Duel = ({playerOption, botOption, figth}) => {
  const [showButton, setShowButton] = useState(true);


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
      <div className='vs'>VS
        <div className="vertical-center">
          {<button className='btn-circle btn-figth' 
              onClick={() => {figth()}}> Fight! </button>}
        </div>
      </div>
      <div className='definitive-option'>{botOption}</div>
    </div>

  )
}

export default Duel
