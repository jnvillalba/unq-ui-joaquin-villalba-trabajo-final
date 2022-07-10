import React from 'react'
import { Component } from 'react'
import { useEffect, useState } from 'react'
import Player from '../Player'

export default function Hand ({name, image, setAHand}) {

    return (
      <button className="btn-circle"  onClick={() => setAHand(`${name}`)} > 
        <img className='hand-image' src={image} alt={name}/> 
        <p>{name}</p>
      </button>
    )
    
}



  /*const setPlayerHand = () => {
    <Player selectedHand={name}/>
    console.table(<Player/>)
  }*/

  