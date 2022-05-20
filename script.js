
let computerChoice = computerPlay();
let playerChoice = playerPlay();

function playerPlay(){
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

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
console.log("You chose: " + playerChoice);
console.log("Computer chose: " + computerChoice);
console.log(playRound(playerChoice, computerChoice));