import React from 'react'
import { useEffect, useState } from 'react'


export default function Player({selectedHand}) {
  
  const [hand, setHand] = useState([]);
  const [score, setScore] = useState(0);

  const selectHand = () => {
    setHand(selectedHand)
  }
  return (
    <div>Player</div>
  )
}
