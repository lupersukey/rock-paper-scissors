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
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life.";
        computerLives--;
    } else if (playerChoice == "melee" && computerChoice == "magic") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life.";
        playerLives--;
    }

    if (playerChoice == "ranged" && computerChoice == "magic") {
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life.";
        computerLives--;
    } else if (playerChoice == "ranged" && computerChoice == "melee") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life.";
        playerLives--;
    }

    if (playerChoice == "magic" && computerChoice == "melee") {
        document.getElementById("roundDesc").innerHTML = "Impressive attack! the enemy lost one life.";
        computerLives--;
    } else if (playerChoice == "magic" && computerChoice == "ranged") {
        document.getElementById("roundDesc").innerHTML = "Unfortunate defeat.. You lost one life.";
        playerLives--;
    }

    if (playerChoice === computerChoice) {
        document.getElementById("roundDesc").innerHTML = "Hmm.. A draw, no lives were lost. Try again!";
    }
}

function choseWinner() {
    if (playerLives == 0 || computerLives == 0) {
        if (playerLives == 0) {
            document.getElementById("roundDesc").innerHTML = "Oh dear.. No lives left for you.";
            document.getElementById("declareWinner").innerHTML = "You lost this battle!";
        } else {
            document.getElementById("roundDesc").innerHTML = "Nice! The poor enemy has no lives left.";
            document.getElementById("declareWinner").innerHTML = "You won this battle!";
        }
        document.getElementById("melee").style.pointerEvents = "none";
        document.getElementById("ranged").style.pointerEvents = "none";
        document.getElementById("magic").style.pointerEvents = "none";
        resetGame();
    }
}

function resetGame() {
    const fightAgain = document.querySelector(".fightAgain");
    const resetBtn = document.createElement("button");
    resetBtn.innerText = "Fight again?";
    fightAgain.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        location.reload();
    })
}

const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        let computerChoice = computerTurn();
        document.getElementById("computersWeaponImg").src = "images/" + computerChoice + ".png";
        playRound(playerChoice, computerChoice);
        round++;
        document.getElementById("roundCount").innerHTML = "Round: " + round;
        document.getElementById("livesCount").innerHTML = "Your Lives: " + playerLives + " | Enemy's Lives: " + computerLives;
        choseWinner();
    })
})