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
let round = 0;
let playerLives = 5;
let computerLives = 5;

document.getElementById("roundCount").innerHTML = "Round: " + round;
document.getElementById("livesCount").innerHTML = "Your Lives: " + playerLives + " | Enemy's Lives: " + computerLives;
document.getElementById("roundDesc").innerHTML = "Try me if you dare!";

function computerTurn() {
    let options = ["melee", "ranged", "magic"];
    return (choice = options[Math.floor(Math.random()*3)]);
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "melee" && computerChoice == "ranged") {
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life, Ranged is no match for Melee";
        computerLives--;
    } else if (playerChoice == "melee" && computerChoice == "magic") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life, Melee is no match for Magic";
        playerLives--;
    }

    if (playerChoice == "ranged" && computerChoice == "magic") {
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life, Magic is no match for Ranged";
        computerLives--;
    } else if (playerChoice == "ranged" && computerChoice == "melee") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life, Ranged is no match for Melee";
        playerLives--;
    }

    if (playerChoice == "magic" && computerChoice == "melee") {
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life, Melee is no match for Magic";
        computerLives--;
    } else if (playerChoice == "magic" && computerChoice == "ranged") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life, Magic is no match for Ranged";
        playerLives--;
    }

    if (playerChoice === computerChoice) {
        document.getElementById("roundDesc").innerHTML = "Hmm.. You and your enemy drew the same weapon, so no lives were lost. Try again!";
    }
}