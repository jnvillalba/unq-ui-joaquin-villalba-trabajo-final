const getWinner = (playerHand, pcHand) => {

    const ROCK_MATCHES = {
        Rock:  "Tie",
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
    
    const PLAYER_HAND_MATCHES = {
        Rock: ROCK_MATCHES,
        Paper: PAPER_MATCHES,
        Scissors: SCISSORS_MATCHES,
        Lizard: LIZARD_MATCHES,
        Spock: SPOCK_MATCHES,
    }    
    
    var pHand = Object.values(playerHand).toString()
    console.log("1"+pHand)
    var comHand = Object.values(pcHand).toString()
    console.log("2"+ comHand)

    const playerHandMatches = PLAYER_HAND_MATCHES[pHand]
    
    const winner = playerHandMatches[comHand]
        
    console.log( "Player " + winner)
    
    
    return winner
    
    }

const exportedObject = {
    getWinner,
    
};

export default exportedObject;

