let computerOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const WINNING_SCORE = 5;
const resetBtn = document.querySelector("#reset");

function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  //convert input to lower case
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection == computerSelection) {
    resultDiv.textContent = `TIE - both players chose ${playerSelection}`;
  } else {
    resultDiv.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  playerScoreDiv.textContent = `Player score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer score: ${computerScore}`;

  if (playerScore == WINNING_SCORE) {
    resultDiv.textContent = "PLAYER WINS!!!";
    gameOver();
  } else if (computerScore == WINNING_SCORE) {
    resultDiv.textContent = "COMPUTER WINS!!!";
    gameOver();
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", clickBtn);
});

function clickBtn(e) {
  let playerChoice = e.target.id;
  let computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
}

function gameOver() {
  buttons.forEach((button) => {
    button.removeEventListener("click", clickBtn);
  });
}

resetBtn.addEventListener("click", () => location.reload());
