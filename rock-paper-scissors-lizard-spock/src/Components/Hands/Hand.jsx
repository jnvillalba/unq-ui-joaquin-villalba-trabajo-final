import React from 'react'

export default function Hand ({name, image, setAHand}) {

    return (
      <button className="btn-circle"  onClick={() => setAHand(`${name}`)} > 
        <img className='hand-image' src={image} alt={name}/> 
        <p>{name}</p>
      </button>
    )
    
}

  