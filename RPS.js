 // Base values

 const choice = ["Rock", "Paper", "Scissors"]; //array of choice

 //getComputerChoice - function that picks rock,paper,scissors at random

 function getComputerChoice () {
    const compChoice = choice[Math.floor(Math.random()*choice.length)];
    return compChoice;
 }

 //getPlayerChoice - get the player choice from choice array 

 function getPlayerChoice () {
  let validatedInput = false; 
  while (validatedInput == false) { 
    const playerPrompt = prompt ("Rock, Paper, Scissors");
    if (playerPrompt == null){ //while the input is misspelled, ask again for input
      continue;
    }
    const playerPromptCase =playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1).toLowerCase(); //case insensitive
    if (choice.includes(playerPromptCase)){
      validatedInput = true;
      return playerPromptCase;
     }
    }
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

 // game function - have to rearrange for who first gets 5 points.

  function game () {
  let playerScore = 0; 
  let computerScore = 0;
  console.log ("Get ready!")
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, playerSelection)
    console.log(playRound(playerSelection,computerSelection));
    console.log(checkWinner(playerSelection,computerSelection));
    console.log("----------------");
    if (checkWinner(playerSelection,computerSelection) == `You Won! ${playerSelection} beats ${computerSelection}!`) {
      playerScore++;
    }
    else if (checkWinner(playerSelection,computerSelection) == `You lost! ${computerSelection} beats ${playerSelection}!`){
      computerScore++;
    }
  }

  console.log ("Game over!")
  if (playerScore > computerScore){
    console.log ("Player wins!");
  }
  else if (playerScore < computerScore){
    console.log ("Computer wins!");
  }
  else {
    console.log ("Its a tie, nobody won!");
  }
 }

 // DOM manipulaton

 const playerC = document.querySelector ('#playerCount');
 const computerC = document.querySelector ('#computerCount');
 const roundResult = document.querySelector ('.roundResultText');
 const playerChoiceImg = document.querySelector ('.playerChoiceImage');
 const playerChoiceTxt = document.querySelector ('.playerChoiceText');
 const computerChoiceImg = document.querySelector ('.computerChoiceImage');
 const computerChoiceTxt = document.querySelector ('.computerChoiceText');
 const playerRock = document.querySelector ('#playerRock');
 const playerPaper = document.querySelector ('#playerPaper');
 const playerScissors = document.querySelector ('#playerScissors');
 


game()