let choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

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

function game() {
    // Initialize player and computer selection
    let playerSelection;
    let computerSelection;
    // Round counter
    let round;
    for (round = 1; round < 6; round++) {
        playerSelection = prompt('Player selection:');
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));
    }
    // Final result
    if (playerScore > computerScore) {
        console.log(`You win! Final result is ${playerScore} to ${computerScore}.`)
    } else if (playerScore < computerScore) {
        console.log(`You lose! Final result is ${playerScore} to ${computerScore}.`)
    } else {
        console.log(`Tied at ${playerScore} to ${computerScore}.`)
    }
}
