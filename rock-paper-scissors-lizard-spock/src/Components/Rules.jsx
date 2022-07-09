import React from 'react'

export default function Rules(playerHand, pcHand) {

    const PLAYER_HANDS = {
        Rock: ROCK_MATCHES,
        Paper: PAPER_MATCHES,
        Scissors: SCISSORS_MATCHES,
        Lizard: LIZARD_MATCHES,
        Spock: SPOCK_MATCHES,
    }

    const ROCK_MATCHES = {
        Rock: "Tie",
        Paper: "Lose",
        Scissors: "Win",
        Lizard: "Win",
        Spock: "Lose",
    }

    const PAPER_MATCHES = {
        Rock: "Win",
        Paper: "Tie",
        Scissors: "Lose",
        Lizard: "Lose",
        Spock: "Win",
    }

    const SCISSORS_MATCHES = {
        Rock: "Lose",
        Paper: "Win",
        Scissors: "Tie",
        Lizard: "Win",
        Spock: "Lose",
    }

    const LIZARD_MATCHES = {
        Rock: "Lose",
        Paper: "Win",
        Scissors: "Lose",
        Lizard: "Tie",
        Spock: "Win",
    }

    const SPOCK_MATCHES = {
        Rock: "Win",
        Paper: "Lose",
        Scissors: "Win",
        Lizard: "Lose",
        Spock: "Tie",
    }
  

    const playerHandMatches = PLAYER_HANDS[playerHand]
    console.log( "Match " + playerHandMatches)
    
    const winner = playerHandMatches[pcHand]
    console.log( "Winner " + winner)
    
    if (winner == "Win"){
        return playerHand
    }if (winner == "Loose") {
        return pcHand
    } else {
        return 0
    }
    
  }
  
  /*
  const getWinner =(playerHand, pcHand) => {
    switch(playerHand){
        case("Rock") : 
            return ROCK_MATCHES[pcHand]
        case("Paper") : 
            return PAPER_MATCHES[pcHand]
        case("Scissors") : 
            return SCISSORS_MATCHES[pcHand]
        case("Lizard") : 
            return LIZARD_MATCHES[pcHand]
        case("Spock") : 
            return SPOCK_MATCHES[pcHand]
    }
    
    }*/


/*if (playerHand = "Rock"){
        const winner = ROCK_MATCHES[pcHand]
    
    } if (playerHand = "Paper") {
        const winner = PAPER_MATCHES[pcHand]
        
    } else {
        
    }
    return winner */