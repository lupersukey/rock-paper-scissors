/*
let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5){
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
            playerScore ++;
            return "You win this round!";
        } else if (playerChoice == "Rock" && computerChoice == "Paper"){
            computerScore ++;
            return "You lose this round!";
        }

        if (playerChoice == "Scissors" && computerChoice == "Paper"){
            playerScore ++;
            return "You win this round!";
        } else if (playerChoice == "Scissors" && computerChoice == "Rock"){
            computerScore ++;
            return "You lose this round!";
        }

        if (playerChoice == "Paper" && computerChoice == "Rock"){
            playerScore ++;
            return "You win this round!";
        } else if (playerChoice == "Paper" && computerChoice == "Scissors"){
            computerScore ++;
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
    console.log("---S C O R E S---");
    console.log("You: " + playerScore + " Computer: " + computerScore);
}



if (playerScore == 5){
    console.log("Well done, you defeated the computer!");
} else{
    console.log("Unlucky, the computer has defeated you!");
}
*/
/*let round = 0;
document.getElementById("roundCount").innerHTML = "Round: " + round;*/