function getPlayerChoice(){
    return prompt("What do you choose between 'Rock', 'Paper' and 'Scissors'? Write down your option : ").toUpperCase();
}

function getComputerChoice(){
    let computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

// Player wins
let playerWins = 0;
// Computer wins
let computerWins = 0;

function playRound(playerSelection, computerSelection){
    console.log("Player selection: " + playerSelection);
    console.log("Computer selection: " + computerSelection);

    if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){
        return alert("DRAW");
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerWins++;
        console.log(computerWins);
        
        return alert("You Lose!");
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerWins++;
        console.log(playerWins);

        return alert("You Won!");
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        playerWins++;
        console.log(playerWins);
        
        return alert("You Won!");
    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        return alert("DRAW");
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerWins++;
        console.log(computerWins);
        
        return alert("You Lose!");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        computerWins++;
        console.log(computerWins);
        
        return alert("You Lose!");
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerWins++;
        console.log(playerWins);

        return alert("You Won!");
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return alert("DRAW");
    } else {
        return "Incorrect spelling!";
    }
    
}

function game() {
    // X5
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));

    // Compare playerWins vs computerWins
    if (playerWins > computerWins){
        console.log("winner");
        alert("You are a winner");
    } else if(playerWins < computerWins) {
        console.log("looser");
        alert("You are a looser");
    } else {
        console.log("DRAW");
        alert("DRAW! Game over");
    }
}

game();
