const getWinner = (playerHand, pcHand) =>{
    
    
    var pHand = Object.values(playerHand).toString()
    console.log("1"+pHand)
    var comHand = Object.values(pcHand).toString()
    console.log("2"+ comHand)

    if(pHand === comHand ){
        return "Tie"
    }if ((pHand === "Rock") && (comHand ==="Paper")) {
        return "Lose"
    }
    if ((pHand ==="Rock") && (comHand = "Scissors")) {
        return "Win"
    }
    if ((pHand === "Scissors") && (comHand === "Paper")) {
        return "Win"
    }

}


export default {
    getWinner,
    
};
