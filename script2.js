//Create three buttons, one for each selection.
let btnPaper = document.getElementById('paper');
let btnRock = document.getElementById('rock');
let btnScissors = document.getElementById('scissors');
let resultDiv = document.getElementById('result');
let playAgain = document.createElement('button');
let score = document.createElement('p');



function getComputerChoice(){
    let computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

// Player wins
let playerWins = 0;
// Computer wins
let computerWins = 0;

function playRound(playerSelection, computerSelection){
    let answer = document.createElement('p');
    let score = document.createElement('p');
    resultDiv.innerHTML = answer.textContent;

    if (playerSelection === 'ROCK' && computerSelection === 'ROCK'){
        answer.textContent= `DRAW! You chose ${playerSelection} and the Computer chose ${computerSelection} `;
        score.textContent =  `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerWins++;
        answer.textContent= `You Lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerWins++;
        answer.textContent= `You Won! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        playerWins++;
        answer.textContent= `You Won! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'PAPER' && computerSelection === 'PAPER') {
        answer.textContent= `DRAW! You chose ${playerSelection} and the Computer chose ${computerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerWins++;
        answer.textContent= `You Lose!${computerSelection} beats ${playerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;
 
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'){
        computerWins++;
        answer.textContent= `You Lose!${computerSelection} beats ${playerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerWins++;
        answer.textContent= `You Won! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

    } else if(playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
        answer.textContent= `DRAW! You chose ${playerSelection} and the Computer chose ${computerSelection} `;
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;
    } 

    resultDiv.appendChild(answer);
    resultDiv.appendChild(score);
}


btnPaper.addEventListener('click', function buttonClick(){
    playerSelection = 'PAPER';
    playRound(playerSelection, getComputerChoice());
    resultDiv.style.border = '2px solid blue';
    let answer = document.createElement('p');
    resultDiv.appendChild(answer);
    resultDiv.appendChild(score);

    gameWinner();
})

btnRock.addEventListener('click', function buttonClick(){
    playerSelection = 'ROCK';
    playRound(playerSelection, getComputerChoice());
    resultDiv.style.border = '2px solid blue';
    let answer = document.createElement('p');
    resultDiv.appendChild(answer);
    resultDiv.appendChild(score);

    gameWinner();
})

btnScissors.addEventListener('click', function buttonClick(){
    playerSelection = 'SCISSORS';
    playRound(playerSelection, getComputerChoice());
    resultDiv.style.border = '2px solid blue';
    let answer = document.createElement('p');
    resultDiv.appendChild(answer);
    resultDiv.appendChild(score);

    gameWinner();
})


function gameWinner(){
    let endGame = document.createElement('div');
    playAgain.textContent = `Let's play again`;

    if(playerWins.valueOf() === 5 ){   
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnRock.disabled = true;

        let winner = document.createElement('p');
        endGame.style.border = '2px solid red';
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;

        winner.textContent= `Congratulations you won 5 rounds! You win this time!`;
        resultDiv.innerHTML = winner.textContent;
        resultDiv.appendChild(endGame);
        endGame.appendChild(score);
        endGame.appendChild(playAgain);

    } else if(computerWins.valueOf() === 5) {
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnRock.disabled = true;

        let looser = document.createElement('p');
        endGame.style.border = '2px solid red';
        score.textContent = `SCORE: You : ${playerWins} - ${computerWins} : Computer`;
        looser.textContent= `Ufff Computer won 5 rounds! You loose this time!`;
        resultDiv.innerHTML = looser.textContent;
        resultDiv.appendChild(endGame);
        endGame.appendChild(score);
        endGame.appendChild(playAgain);
    } 
}

gameWinner()

playAgain.addEventListener('click', function playAgainClick(){
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    btnRock.disabled = false;
    window.location=window.location;
})