let humanScore = 0;
let computerScore = 0;
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");
const buttons = document.querySelector(".buttons");
let results = document.querySelector("#results");
let choices = document.querySelector("#choices");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(e) {
    let humanChoice;
    let target = e.target;

    switch (target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;            
    }

    return humanChoice;
}

function playRound(e) {    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(e);

    if (!humanChoice) return;
    
    if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore ++;
        results.innerHTML = `Computer wins the round! Computer: ${computerScore}, You: ${humanScore}`
    } else if (humanChoice === computerChoice) {
        results.innerHTML = `Draw! Computer: ${computerScore}, You: ${humanScore}`
    } else {
        humanScore ++;
        results.innerHTML = `You win the round! Computer: ${computerScore}, You: ${humanScore}`
    }

    choices.innerHTML = `Computer chose ${computerChoice} while you chose ${humanChoice}`;

}

// TODO: implement end of round function with reset functionality
    if (computerScore === 5) {
        alert("Computer wins!")
        return;
    } else if (humanScore === 5) {
        alert("You win!");
        return;
    }

buttons.addEventListener("click", playRound);

/* function playGame(numberOfRounds) {
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

playGame(5);*/
