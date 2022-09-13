let computerOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  //convert input to lower case
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
}
