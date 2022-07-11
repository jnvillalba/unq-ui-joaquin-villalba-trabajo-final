import React, {useState } from 'react'
import {Alert} from 'react-bootstrap'
import { useLocation, useNavigate} from 'react-router-dom'
import Duel from './Duel'
import Hand from '../Hands/Hand'
import Score from '../Score'
import Rules from '../Rules'
import './GameScreen.css'
import { handsList } from '../Hands/handsList'
import { useEffect } from 'react'

export default function GameScreen() {

    const [playerHand, setPlayerHand] = useState('')
    const [playerScore, setPlayerScore] = useState(0)
    const [computerHand, setComputerHand] = useState('')
    const [computerScore, setComputerScore] = useState(0)
    const [actualRound, setActualRound] = useState(1)
    const location = useLocation()
    const maxRounds = location?.state?.rounds
    const navigate = useNavigate()
    const goToGameScreen = () => navigate('/FinishScreen',{state:{playerScore, computerScore}})
  
    //useEffect((hand) => { setPlayerHand(hand) }, [playerHand])

    const randomComputerHand = () => {
        const selectedHand = Math.floor(Math.random() * handsList.length)
        const randomHand = handsList[selectedHand].name
        console.log("PC: " + randomHand)
        return randomHand 
    }

    const handleSelect = (hand) => {
        setPlayerHand(hand)
        setComputerHand(randomComputerHand())
        fight()
    }  
    
    const fight = () => {
        var winner = Rules.getWinner(playerHand,computerHand);
        if (winner === playerHand){
            setPlayerScore(playerScore+1)
        }if((winner === computerHand)){
            setComputerScore(computerScore+1)
        }if((winner === "Tie")){
            console.log("Tie")
        }
        setActualRound(actualRound+1)
        deleteDuelAfter(1000)
        console.log('Winner: ' + winner)
    }

    const deleteDuelAfter = (timeOut) =>{
        setTimeout(()  => {
            setPlayerHand()
            setComputerHand('')
        },timeOut)
    } 

    const finishGame = () => {
        if ({actualRound} === {maxRounds}) {
            goToGameScreen()
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
            playerOption = {playerHand}
            botOption = {computerHand}
            figth = {fight}
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



    /*const winAlert = (winner) =>{
        const alert =(variant) =>  <Alert variant={variant}> Player Win </Alert> 
        if (winner === playerHand){
            return alert('sucess')
        }if((winner === computerHand)){
            return alert('danger')
        }if((winner = 0)){
            return alert('warning')
        }
        return alert
    }*/
