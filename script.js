
let computerChoice = computerPlay();
let playerChoice = "Rock"

function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    return choice = options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice){
    if (playerChoice == "Rock" && computerChoice == "Scissors"){
        return "You win this round!";
    } else if (playerChoice == "Rock" && computerChoice == "Paper"){
        return "You lose this round!";
    }

    if (playerChoice == "Scissors" && computerChoice == "Paper"){
        return "You win this round!";
    } else if (playerChoice == "Scissors" && computerChoice == "Rock"){
        return "You lose this round!";
    }

    if (playerChoice == "Paper" && computerChoice == "Rock"){
        return "You win this round!";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors"){
        return "You lose this round!";
    }

    if (playerChoice === computerChoice){
        return "This round is a draw, no points awarded!";
    }
}

console.clear();
console.log(playRound(playerChoice, computerChoice));