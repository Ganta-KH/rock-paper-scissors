function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}


function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a Draw! ${playerSelection} and ${computerSelection}`;
    }
    if ((playerSelection === "Paper" && computerSelection === 'Rock') || (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection == "Paper")) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function endGame(playerScore, computerScore) {
    const div = document.querySelector('#box');
    div.classList.add('box');        
    if (playerScore == computerScore) {
        div.textContent = 'It a Draw';
    } else if (playerScore > computerScore) {
        div.textContent = 'Congratulation You Won'
    } else {
        div.textContent = 'Game Over'
    }
    container.appendChild(div)    
}

function selectComputerChoice(choice) {
    const item = document.querySelector('.'+choice.toLowerCase());
    item.classList.add('select');
}

function removeComputerChoice() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    rock.classList.remove('select');
    paper.classList.remove('select');
    scissors.classList.remove('select');
}

function startGame() {
    const div = document.querySelector('#box');
    div.textContent = "";
    div.classList.remove('box');
}


const result = document.querySelector('.result');
const comment = document.querySelector('.comment');
const you = document.querySelector('.you');
const ai = document.querySelector('.ai');
let playerScore = 0;
let computerScore = 0;

const weapons = document.querySelectorAll('.item');


weapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            startGame();
            playerScore = 0;
            computerScore = 0;
            you.textContent = `Player: ${0}`
            ai.textContent = `Computer: ${0}`
        }

        removeComputerChoice();
        weapons.forEach((w) => {
            w.classList.remove('select');
        })
        weapon.classList.add('select');
        
        const computerChoice = getComputerChoice();
        selectComputerChoice(computerChoice);
        const resultText = gameRound(weapon.textContent, computerChoice).split('! ');
        result.textContent = resultText[0];
        comment.textContent = resultText[1];
        if (resultText[0].includes('Won')) {playerScore++};
        if (resultText[0].includes('Lose')) {computerScore++};
        you.textContent = `Player: ${playerScore}`
        ai.textContent = `Computer: ${computerScore}`
        if (playerScore == 5 || computerScore == 5) {
            endGame(playerScore, computerScore);

            result.textContent = 'Choose Your Object';
            comment.textContent = 'First To Score 5 Wins The Game';
        }
    });
});
