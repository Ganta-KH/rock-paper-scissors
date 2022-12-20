function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function gameRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if (playerSelection === computerSelection) {
        return `It's a Draw! ${playerSelection} and ${computerSelection}`;
    }
    if ((playerSelection === "Paper" && computerSelection === 'Rock') || (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection == "Paper")) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Please Enter Your Choice: ');
        computerSelection = getComputerChoice();
        result = gameRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('Won')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return `You won! Congratulation`;
    } else if (playerScore < computerScore) {
        return `You Lose! Better Luck Next Time`
    } else {
        return `It's a Draw!`
    }
}

console.log(game())

/*
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(gameRound(playerSelection, computerSelection));
*/