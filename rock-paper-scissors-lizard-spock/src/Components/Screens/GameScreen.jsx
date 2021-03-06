import React, {useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Duel from '../Duel'
import Hand from '../Hands/Hand'
import Score from '../Score'
import Rules from '../Rules'
import './GameScreen.css'
import { handsList } from '../Hands/handsList'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function GameScreen() {

    const playerHand = useRef("")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const computerHand = useRef("")
    const [actualRound, setActualRound] = useState(1)
    const [roundWinner, setRoundWinner] = useState("")
    const location = useLocation()
    const maxRounds = parseInt(location?.state?.rounds)
    const navigate = useNavigate()
    const goToFinishScreen = (state) => navigate('/FinishScreen',{state})

    const [showHands, setShowHands] = useState(true)

    const handleShowHands = () =>{
        if(!playerHand){
            setShowHands(true)
        }else{
            setShowHands(false)
        }
    }
    useEffect(()=>{
        setTimeout(()  => {checkFinishGame()},800)
    },[actualRound])

    const setPlayerHand = (hand) =>{
        playerHand.current = hand
        handleShowHands()
    }
    const setComputerHand = (hand) =>{
        computerHand.current = hand
    }

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        return randomHand 
    }

    const handleSelect = (hand) => {
        setPlayerHand(hand)
        setComputerHand(randomComputerHand())
        fight()
    }  
    
    const fight = () => {
        var roundWinner = Rules.getWinner(playerHand,computerHand)
        if (roundWinner === "Win"){
            setPlayerScore(playerScore+1)
        }if((roundWinner === "Lose")){
            setComputerScore(computerScore+1)
        }if((roundWinner === "Tie")){
        }
        setRoundWinner(roundWinner)
        deleteDuelAfter(2000)
        setActualRound(actualRound+1)
        
    }

    const deleteDuelAfter = (timeOut) =>{
        setTimeout(()  => {
            setPlayerHand("")
            setComputerHand("")
            setRoundWinner("")
            setShowHands(true)
        },timeOut)
        
        
    } 

    const checkFinishGame = () => {
        if (actualRound-1 === maxRounds) {
            goToFinishScreen({playerScore, computerScore})

        }
    }

  return (
    <div className='gamescreen'>
        <Score 
            playerScore ={playerScore}
            computerScore ={computerScore}
        />

        <h1 className='rounds-title text-center'> Round {actualRound} of {maxRounds}</h1>
        
        <Duel
            playerOption = {Object.values(playerHand).toString()}
            botOption = {Object.values(computerHand).toString()}
            winner = {roundWinner}
        />

        <div className='hands-container'>
            <div>Select a Hand:</div>
            <div className='gamescreen-hands'>
            { 
                handsList.map((hand) => (
                    <Hand key={hand.id} disabled={!showHands} image={hand.image} name={hand.name} 
                        setAHand={handleSelect}
                    />)
                )
            }   
            </div>
        </div> 

    </div>
  )
}
