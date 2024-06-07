// script.js

// Variables to store scores
let userScore = 0;
let compScore = 0;

// Get DOM elements
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const messageElement = document.getElementById('msg');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Add event listeners to choices
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));

// <!...compScore. Function to play the game...!>
function playGame(userChoice) {
    const compChoice = getCompChoice();
    const winner = determineWinner(userChoice, compChoice);

    if (winner === 'user') {
        userScore++;
        messageElement.textContent = `You win! ${userChoice} beats ${compChoice}`;
    } else if (winner === 'comp') {
        compScore++;
        messageElement.textContent = `You lose! ${compChoice} beats ${userChoice}`;
    } else {
        messageElement.textContent = `It's a draw! You both chose ${userChoice}`;
    }

    updateScores();
}

// Function to get computer's choice
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'draw';
    }

    if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'comp';
    }
}

// Function to update the scores in the DOM
function updateScores() {
    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;
}


function playMusic() {
    const music = document.getElementById('bg-music');
    music.play();
}

// Function to stop the background music
function stopMusic() {
    const music = document.getElementById('bg-music');
    music.pause();
    music.currentTime = 0; // Reset the music to the beginning
}