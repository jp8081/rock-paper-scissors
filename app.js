
// Function for Computer to randomly choose Rock, Paper, or Scissors

function computerPlay() {
    let computerThrow;
    let computerThrowNum = Math.floor(Math.random() * 3 + 1);

    if (computerThrowNum === 1) {
        computerThrow = 'rock';
    }
    else if (computerThrowNum === 2) {
        computerThrow = 'paper';
    }
    else if (computerThrowNum === 3) {
        computerThrow = 'scissors';
    }

    return computerThrow;
}

    // Set player & computer scores to zero to allow them to increase as rounds are won
    let playerScore = 0;
    let computerScore = 0;

// Function to play 1 round of rock paper scissors

function playRound() {
    computerSelection = computerPlay();

    // Prompt user to throw rock paper or scissors
    let playerSelection = prompt('Choose Rock, Paper, or Scissors!').toLowerCase();

    // If user does not enter rock paper or scissors, continue to ask them to do so
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt('Please choose rock, paper, or scissors.').toLowerCase();
    }



    // Game outcomes if computer selects Rock
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 1;
            console.log("It's a tie!");
        }
        else if (playerSelection === 'paper') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 0;
            console.log("You Win! Paper beats rock.");
        }
        else if (playerSelection === 'scissors') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 0;
            computerScore += 1;
            console.log("You Lose! Rock beats scissors.");
        }
    }
    // Game outcomes if computer selects Paper
    else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 0;
            computerScore += 1;
            console.log("You Lose! Paper beats rock.");
        }
        else if (playerSelection === 'paper') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 1;
            console.log("It's a tie!");
        }
        else if (playerSelection === 'scissors') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 0;
            console.log("You Win! Scissors beats paper.");
        }
    }
    // Game outcomes if computer selects Scissors
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 0;
            console.log("You Win! Rock beats scissors.");
        }
        else if (playerSelection === 'paper') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 0;
            computerScore += 1;
            console.log("You Lose! Scissors beats paper.");
        }
        else if (playerSelection === 'scissors') {
            console.log(`Computer chose ${computerSelection}.`);

            // Add 1 to respective winner
            playerScore += 1;
            computerScore += 1;
            console.log("It's a tie!");
        }
    }
}

// Play [1 Round] 5 times, logging the round index and who won
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}.`);
        playRound();
        console.log(`[Score] Player: ${playerScore} | Computer: ${computerScore}`)
    }
        // Compare final scores over all 5 rounds to see who wins overall
        if (playerScore > computerScore) {
            return 'Congrats! You Won!';
        }
        else if (playerScore === computerScore) {
            return "Wow, it's a tie!"
        }
        else {
            return 'You Lost!';
        }
}
