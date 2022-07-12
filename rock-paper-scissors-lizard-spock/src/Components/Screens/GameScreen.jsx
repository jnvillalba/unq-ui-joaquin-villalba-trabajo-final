import React, {useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Duel from './Duel'
import Hand from '../Hands/Hand'
import Score from '../Score'
import Rules from '../Rules'
import './GameScreen.css'
import { handsList } from '../Hands/handsList'
import utils from './utils'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function GameScreen() {

    const playerHand = useRef("")
    const [playerScore, setPlayerScore] = useState(0)
    const computerHand = useRef("")
    const [computerScore, setComputerScore] = useState(0)

    const [actualRound, setActualRound] = useState(1)

    const [roundWinner, setRoundWinner] = useState("")
    const location = useLocation()
    const maxRounds = location?.state?.rounds
    const navigate = useNavigate()
    const goToFinishScreen = () => navigate('/FinishScreen',{state:{playerScore, computerScore}})

    const setPlayerHand = (hand) =>{
        playerHand.current = hand
    }
    const setComputerHand = (hand) =>{
        computerHand.current = hand
    }

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        console.log("PC: " + randomHand)
        return randomHand 
    }

    const handleSelect = (hand) => {
        setPlayerHand(hand)
        console.log("P: " + hand)
        setComputerHand(randomComputerHand())
        fight()
        
    }  
    
    const fight = () => {
        var roundWinner = Rules.getWinner(playerHand,computerHand)
        console.log('roundResult: ' + roundWinner)
        if (roundWinner === "Win"){
            setPlayerScore(playerScore+1)
        }if((roundWinner === "Lose")){
            setComputerScore(computerScore+1)
        }if((roundWinner === "Tie")){
            console.log("Tie")
        }
        setRoundWinner(roundWinner)
        setActualRound(actualRound+1)
        console.log("Figth() actualRound " +actualRound)
        deleteDuelAfter(2000)
        
    }

    const deleteDuelAfter = (timeOut) =>{
        setTimeout(()  => {
            setPlayerHand("")
            setComputerHand("")
            setRoundWinner("")
            finishGame()
        },timeOut)
        
    } 

    const finishGame = () => {
        if (actualRound === maxRounds) {
            goToFinishScreen()
            console.log("actualRound " + actualRound)
            console.log("maxRounds " + maxRounds)
        }
    }

  return (
    <div className='gamescreen'>
        <Score 
            playerScore ={playerScore}
            computerScore ={computerScore}
        />

        <h1 className='text-center'> Round {actualRound} of {maxRounds}</h1>
        
        <Duel
            playerOption = {Object.values(playerHand).toString()}
            botOption = {Object.values(computerHand).toString()}
            figth = {fight}
            winner = {roundWinner}
        />
        

        <div className='hands-container'>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands'>
            { 
                handsList.map((hand) => (
                    <Hand key={hand.id} image={hand.image} name={hand.name} 
                        setAHand={handleSelect}
                    />)
                )
            }   
            </div>
        </div> 

    </div>
  )
}
