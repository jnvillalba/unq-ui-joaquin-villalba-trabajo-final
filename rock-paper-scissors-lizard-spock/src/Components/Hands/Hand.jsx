import React from 'react'
import { useEffect, useState } from 'react'

export default function Hand({name, image, setPlayerHand}) {
  
    return (
      <button className="btn-circle" type='button' onClick={setPlayerHand} > 
        <img className='hand-image' 
              src={image} 
              alt={name}
        /> 
      </button>
  )
}
