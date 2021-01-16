let choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
// Add "click" even listener for each image
const images = Array.from(document.querySelectorAll('.image'));
images.forEach(image => image.addEventListener('click', playGame));
// Select all DOM nodes
const message = document.querySelector('.message');
const playScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const playSelectDisplay = document.querySelector('.player');
const computerSelectDisplay = document.querySelector('.computer');

function computerPlay() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to all lower cases
    playerSelection = playerSelection.toLowerCase();
    // Capitalize first letter of playerSelection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    let result

    // Compare playerSelection vs computerSelection
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            result = 'Tie!';
        } else if (computerSelection === 'Paper') {
            result = 'You lose! Paper beats rock.';
            computerScore++;
        } else {
            result = 'You win! Rock beats scissors.';
            playerScore++;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            result = 'You win! Paper beats rock.';
            playerScore++;
        } else if (computerSelection === 'Paper') {
            result = 'Tie!';
        } else {
            result = 'You lose! Scissors beats paper.';
            computerScore++;
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            result = 'You lose! Rock beats scissors.';
            computerScore++;
        } else if (computerSelection === 'Paper') {
            result = 'You win! Scissors beats paper.';
            playerScore++;
        } else {
            result = 'Tie!';
        }
    }
    return result;
}

function game(playerSelection) {
    // Initialize computer selection
    let computerSelection;
    computerSelection = computerPlay();
    // Play this round
    result = playRound(playerSelection, computerSelection);
    // Display results
    message.textContent = result;
    playScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playSelectDisplay.appendChild(addParagraph(playerSelection));
    computerSelectDisplay.appendChild(addParagraph(computerSelection));
    // Show "Play Again" button when game finishes
    if (playerScore === 5 || computerScore === 5) {
      showPlayAgain();
    }
}

function playGame(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }
  //console.log(e.target.alt)
  game(e.target.alt)
}

function addParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  return p
}

function showPlayAgain() {
  const img = document.createElement('img');
  img.src = 'images/play_again.png';
  img.classList.add("playagain");
  const area = document.querySelector('.button-area');
  area.appendChild(img);
  img.addEventListener('click', playAgain);
}

function playAgain() {
  window.location.reload();
}
