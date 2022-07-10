const getWinner = (playerHand, pcHand) => {

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

    const PLAYER_HAND_ROCK_MATCHES = {
        Rock: ROCK_MATCHES,
        Paper: PAPER_MATCHES,
        Scissors: SCISSORS_MATCHES,
        Lizard: LIZARD_MATCHES,
        Spock: SPOCK_MATCHES,
    }    

    const playerHandMatches = PLAYER_HAND_ROCK_MATCHES[playerHand]
    
    const winner = playerHandMatches[pcHand]
    console.log( "Player " + winner)

    
    if (winner === "Win"){
        return playerHand
    }if (winner === "Lose") {
        return pcHand
    } else {
        return 0
    }
    
    console.log( "Winner " + winner)

  }

  export default {
    getWinner
};
  
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