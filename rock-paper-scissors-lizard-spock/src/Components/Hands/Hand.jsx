import React from 'react'

export default function Hand ({name, image, setAHand, disabled}) {

    return (
      <button type="button" className="btn-circle" disabled={disabled} onClick={() => setAHand(`${name}`)} > 
        <img className='hand-image' src={image} alt={name}/> 
        <p>{name}</p>
      </button>
    )
    
}

  