import React from 'react'
import { useEffect, useState } from 'react'

const [hand, setHand] = useState([]);
const [score, setScore] = useState(0);

const selectHand = (value) => {
  setHand(value)
}





export default function Player() {
  return (
    <div>Player</div>
  )
}
