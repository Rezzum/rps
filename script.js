let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let humanChoice;

    while (true) {
        humanChoice = prompt("Type your choice: Rock, Paper or Scissors").toLowerCase();

        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            break;
        }
    }
    
    switch (humanChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    }
}

function playRound(humanChoice, computerChoice) {    
    if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        alert(`You lose! Current scores: computer ${computerScore}, you ${humanScore}`)
    } else if (humanChoice === computerChoice) {
        alert(`Draw! Current scores: computer ${computerScore}, you ${humanScore}`);
    } else {
        humanScore += 1;
        alert(`You win! Current scores: computer ${computerScore}, you ${humanScore}`);
    }
}

function playGame(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        alert(`You've lost ${humanScore}:${computerScore}!`);
    } else if (computerScore < humanScore) {
        alert(`You've won ${humanScore}:${computerScore}!`);
    } else {
        alert(`It's a draw ${humanScore}:${computerScore}!`);
    }
}

playGame(5);
