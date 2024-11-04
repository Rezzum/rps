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
