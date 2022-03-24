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
function game(playerChoice){
    var playerScore = 0;
    var computerScore = 0;

    const playerSelection = playerChoice;
    const computerSelection = computerPlay();

    const container = document.querySelector('#container');

    const choices = document.createElement('div');
    const winnerDiv = document.createElement('div');
    choices.textContent = "You choose " + playerSelection + ". Computer choose " + computerSelection + ".";
    container.appendChild(choices);

    //console.log("You choose " + playerSelection + ". Computer choose " + computerSelection + ".");

    winner = playRound(playerSelection, computerSelection);

    
    //winnerDiv.textContent = "You choose " + playerSelection + ". Computer choose " + computerSelection + ".";
    //container.appendChild(choices);    

        if (winner == "computer") {
            computerScore += 1;
            winnerDiv.textContent = "Computer wins this round!"
        }
        else if (winner == "player") {
            playerScore += 1;
            winnerDiv.textContent = "Player wins this round!"
        }
        else {
            winnerDiv.textContent = "This round is a tie!"
        }
        container.appendChild(winnerDiv);
        console.log("Player score " + playerScore + ". Computer score " + computerScore + ".")
    //}
    
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


const btns = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
btns.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      game(button.id);
    });
});



//game();