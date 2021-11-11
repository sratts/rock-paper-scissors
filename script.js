//function computerPlay
//make a random number between 1 and 3
//assign each number a value of one of rock, paper, scissors
//return the associated rock, paper, scissors as the computer's choice

function computerPlay(){
    randomNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (randomNum == 1) {
        return "rock";
    }
    else if (randomNum == 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

//function playRound
//play a round of rock paper scissors
//take two variables, playerSelection and computerSelection
//compare them and decide who is winner
//return the winner
//based on rock paper scissos rules
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return false;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors")
            return "player";
        else
            return "computer";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "player"
        }
        else {
            return "computer"
        }
    }
    else {
        if (computerSelection == "rock") {
            return "computer"
        }
        else    
            return "player"
    }

}


//function game()
//play rock paper scissors 5 times and keeps track of the winner
function game(){
    var playerScore = 0;
    var computerScore = 0;

    for (i=0; i<5; i++) {
        const playerSelection = prompt("Enter rock, paper or scissors: ");
        const computerSelection = computerPlay();

        console.log("You choose " + playerSelection + ". Computer choose " + computerSelection + ".");

        winner = playRound(playerSelection, computerSelection);

        if (winner == "computer") {
            computerScore += 1;
            console.log("Computer wins this round!");
        }
        else if (winner == "player") {
            playerScore += 1;
            console.log("Player wins this round!");
        }
        else {
            console.log("This round is a tie!");
        }
        console.log("Player score " + playerScore + ". Computer score " + computerScore + ".")
    }
    
    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }

    console.log("The final score is computer " + computerScore + ", player " + playerScore + ".");
}

game();