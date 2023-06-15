 // Base values

 const choice = ["Rock", "Paper", "Scissors"]; //array of choice

 let playerScore = 0;
 let computerScore = 0;


 //getComputerChoice - function that picks rock,paper,scissors at random

 function getComputerChoice () {
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
 }

 //getPlayerChoice - get the player choice from choice array 

 // function getPlayerChoice () {
 //  let validatedInput = false; 
 //  while (validatedInput == false) { 
 //    const playerPrompt = prompt ("Rock, Paper, Scissors");
 //    if (playerPrompt == null){ //while the input is misspelled, ask again for input
 //      continue;
 //    }
 //    const playerPromptCase =playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase(); //case insensitive
 //    if (choice.includes(playerPromptCase)){
 //      validatedInput = true;
 //      return playerPromptCase;
 //     }
 //    }
 //   }

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

// game function - have to rearrange for who first gets 5 points. ( OLD CONSOLE VERSION)
//
//  function game () {
//  let playerScore = 0; 
//  let computerScore = 0;
//  console.log ("Get ready!")
//  for (let i = 0; i < 5; i++) {
//    const playerSelection = getPlayerChoice();
//    const computerSelection = getComputerChoice();
//    playRound(computerSelection, playerSelection)
//    console.log(playRound(playerSelection,computerSelection));
//    console.log(checkWinner(playerSelection,computerSelection));
//    console.log("----------------");
//    if (checkWinner(playerSelection,computerSelection) == `You Won! ${playerSelection} beats ${computerSelection}!`) {
//      playerScore++;
//    }
//    else if (checkWinner(playerSelection,computerSelection) == `You lost! ${computerSelection} beats ${playerSelection}!`){
//      computerScore++;
//    }
//  }
//
//  console.log ("Game over!")
//  if (playerScore > computerScore){
//    console.log ("Player wins!");
//  }
//  else if (playerScore < computerScore){
//    console.log ("Computer wins!");
//  }
//  else {
//    console.log ("Its a tie, nobody won!");
//  }
// }
// 
//game()

function game() {
  if ( playerScoreJs === 5 ) {
alert = "You have won the game!"
  }
  else if ( computerScoreJs === 5) {
    alert = "You have lost the game"
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
  game ();

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
})

paperBtn.addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  const playerSelection = "Paper";
  playRound (playerSelection, computerSelection);
  game();

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
})

scissorsBtn.addEventListener('click', function() {
  const computerSelection = getComputerChoice();
  const playerSelection = "Scissors";
  playRound (playerSelection, computerSelection);
  game();

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
})
 
