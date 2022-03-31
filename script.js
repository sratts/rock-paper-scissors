//variables to keep scores
let playerScore = 0;
let computerScore = 0;

//elements to show the scores
const playerScoreContainer = document.getElementById("player-score");
const computerScoreContainer = document.getElementById("computer-score");

//element to print the results of each round
const results = document.getElementById("result");

//player buttons
const playerSelectionButtons = document.querySelectorAll('#rock, #paper, #scissors');

//get the reset button
const resetButton = document.getElementById("reset");

// add  a click eventListener for each player button
playerSelectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
});

//add a click eventListener for the Reset button
resetButton.addEventListener('click', () => {
    resetGame();
});


//--------------------//
//     FUNCTIONS      //
//--------------------//

//function computerPlay
//make a random number between 1 and 3
//assign each number a value of one of rock, paper, scissors
//return the associated rock, paper, scissors as the computer's choice
function computerPlay(){
    randomNum = Math.floor(Math.random() * 3);

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

//function chooseWinner
//take two variables, playerSelection and computerSelection
//compare them and decide who is winner
//return the winner
//based on rock paper scissos rules
function chooseWinner(playerSelection, computerSelection) {

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


//function playRound()
//play rock paper scissors until someone gets to 5 points and keeps track of the winner
function playRound(playerSelection){
    
    const computerSelection = computerPlay(); //set computer choice
    const winner = chooseWinner(playerSelection, computerSelection); //choose the winner
   
    //get and create all elements
    const choices = document.createElement('div');
    const winnerDiv = document.createElement('div');
    const resultButton = document.getElementById(playerSelection);
    const resultButtonComp = document.getElementById(computerSelection+'-comp');


    if (playerScore < 5 && computerScore < 5) {
        
        clearResults(); //clear previous round results

        choices.textContent = "You choose " + playerSelection + ". Computer choose " + computerSelection + ". ";
    
        resultButton.classList.add('button-selected');
        resultButtonComp.classList.add('button-selected');
    
        if (winner == "computer") {
            computerScore += 1;
            choices.textContent += "Computer wins this round!"
        }
        else if (winner == "player") {
            playerScore += 1;
            choices.textContent += "Player wins this round!"
        }
        else {
            choices.textContent += "This round is a tie!"
        }

        results.appendChild(choices);

        if (playerScore >= 5 ){
            winnerDiv.textContent = "Player Wins This Game! Replay?" 
            results.appendChild(winnerDiv);  
        }
        else if (computerScore >= 5) {
            winnerDiv.textContent = "Computer Wins This Game! Replay?" 
            results.appendChild(winnerDiv); 
        }
        
        playerScoreContainer.textContent = "Score: " + playerScore;
        computerScoreContainer.textContent = "Score: " + computerScore;
    }
}

//function clearResults
//clears the previous selections and results
function clearResults() {
    //remove all children from results
    while (results.hasChildNodes()) {
        results.removeChild(results.firstChild);
      }
  
      const allbtns = document.querySelectorAll('.button-selected');

      //remove classes
      allbtns.forEach((button) => {
          button.classList.remove('button-selected')
      });
}

//function reset game
//clear the scores
//clear most recent selections.
function resetGame() {
    clearResults(); 

    playerScore = 0;
    computerScore = 0; 

    playerScoreContainer.textContent = "Score: " + playerScore;
    computerScoreContainer.textContent = "Score: " + computerScore;
}