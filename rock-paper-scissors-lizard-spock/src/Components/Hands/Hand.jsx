import React from 'react'
import { Component } from 'react'
import { useEffect, useState } from 'react'
import Player from '../Player'

export default function Hand ({name, image, setAnItem}) {

    return (
      <div>
        <button className="btn-circle"  onClick={() => setAnItem(`${name}`)} > 
            <img className='hand-image' 
                  src={image} 
                  alt={name}
            /> 
          {name}
        </button>
      </div>
      
  )
    
}



  /*const setPlayerHand = () => {
    <Player selectedHand={name}/>
    console.table(<Player/>)
  }*/

  