 // Base values

 const choice = ["Rock", "Paper", "Scissors"];

 let playerScore = 0;
 let computerScore = 0;


 //getComputerChoice - function that picks rock,paper,scissors at random

 function getComputerChoice () {
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
 }


 //playRound - function that handles a single round of RPS

 function playRound(playerSelection,computerSelection) {
   if (playerSelection == computerSelection) {
     return "tie";
   }
   else if (
     (playerSelection == "Rock" && computerSelection == "Scissors") ||
     (playerSelection == "Scissors" && computerSelection == "Paper") ||
     (playerSelection == "Paper" && computerSelection == "Rock")
   ) {
     return "player";
   }
   else if (
     (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
     (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
     (computerSelection == 'Paper' && playerSelection == 'Rock')
   ) {
     return "computer";
   }
 }

 
 //checkWinner - function that returns a string depending on the winning condition

 function checkWinner (playerSelection, computerSelection) {
  const result = playRound (playerSelection, computerSelection);
  if (result == "tie") {
      return "Its a tie!!!";
    }
  else if 
    (result == "player") {
      return `You Won! ${playerSelection} beats ${computerSelection}!`;
    }
  else if (result == "computer") {
      return `You lost! ${computerSelection} beats ${playerSelection}!`;
  }
 }

// game function to check for the winner

function game() {
  if ( playerScore === 5 ) {
alert ("You have won the game!");
  }
  else if ( computerScore === 5) {
    alert ("You have lost the game");
  }
}

 // DOM manipulaton

const rockBtn = document.querySelector('#playerRock');
const paperBtn = document.querySelector ('#playerPaper');
const scissorsBtn = document.querySelector ('#playerScissors');
const playerScoreJs = document.querySelector ('#playerCount');
const computerScoreJs = document.querySelector ('#computerCount');
const roundResult = document.querySelector ('.roundResultText');



rockBtn.addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  const playerSelection = 'Rock';
  playRound (playerSelection, computerSelection);

  if (checkWinner(playerSelection,computerSelection) == `You Won! ${playerSelection} beats ${computerSelection}!`) {
    playerScore++;
    roundResult.innerText =  `You Won! ${playerSelection} beats ${computerSelection}!`;
    playerScoreJs.innerText = `${playerScore}`;
  }
  else if (checkWinner(playerSelection,computerSelection) == `You lost! ${computerSelection} beats ${playerSelection}!`){
    computerScore++;
    roundResult.innerText = `You lost! ${playerSelection} beats ${computerSelection}!`;
    computerScoreJs.innerText = `${computerScore}`;
  }
  else {
    roundResult.innerText = "It's a tie!"
  }
 game ();

})

paperBtn.addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  const playerSelection = "Paper";
  playRound (playerSelection, computerSelection);
  

  if (checkWinner(playerSelection,computerSelection) == `You Won! ${playerSelection} beats ${computerSelection}!`) {
    playerScore++;
    roundResult.innerText =  `You Won! ${playerSelection} beats ${computerSelection}!`
    playerScoreJs.innerText = `${playerScore}`;
  }
  else if (checkWinner(playerSelection,computerSelection) == `You lost! ${computerSelection} beats ${playerSelection}!`){
    computerScore++;
    roundResult.innerText = `You lost! ${playerSelection} beats ${computerSelection}!`
    computerScoreJs.innerText = `${computerScore}`;
  }
  else {
    roundResult.innerText = "It's a tie!"
  }
  game();
})

scissorsBtn.addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  const playerSelection = "Scissors";
  playRound (playerSelection, computerSelection);
 

  if (checkWinner(playerSelection,computerSelection) == `You Won! ${playerSelection} beats ${computerSelection}!`) {
    playerScore++;
    roundResult.innerText =  `You Won! ${playerSelection} beats ${computerSelection}!`;
    playerScoreJs.innerText = `${playerScore}`;
  }
  else if (checkWinner(playerSelection,computerSelection) == `You lost! ${computerSelection} beats ${playerSelection}!`){
    computerScore++;
    roundResult.innerText = `You lost! ${playerSelection} beats ${computerSelection}!`;
    computerScoreJs.innerText = `${computerScore}`;
  }
  else {
    roundResult.innerText = "It's a tie!"
  } 
  game();
})
 
