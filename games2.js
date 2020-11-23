function computerPlay(){
    
    switch(Math.floor(Math.random() * 3)){
        case 0:
            hand = "ROCK";
            break;
        case 1:
            hand = "PAPER";
            break;
        case 2:
            hand = "SCISSORS";
            break;
    }
    return hand;
}

var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection){

    if (playerSelection == "ROCK"){
        
        if (computerSelection == "ROCK"){
            document.getElementById("message").innerHTML = "Draw";
        }
        else if (computerSelection == "PAPER"){
            computerScore ++;
            document.getElementById("message").innerHTML = "You lose. Paper beats Rock";
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if (computerSelection == "SCISSORS"){
            playerScore++;
            document.getElementById("message").innerHTML = "You win. Rock beats Scissors";
            document.getElementById("playerScore").innerHTML = playerScore;
        }
    }
    else if (playerSelection == "PAPER"){
                
        if (computerSelection == "ROCK"){
            playerScore++;
            document.getElementById("message").innerHTML = "You win. Paper beats Rock";
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else if (computerSelection == "PAPER"){
            document.getElementById("message").innerHTML = "Draw";
        }
        else if (computerSelection == "SCISSORS"){
            computerScore++;
            document.getElementById("message").innerHTML = "You lose. Scissors beats Paper";
            document.getElementById("computerScore").innerHTML = computerScore;
        }
    }
    else if (playerSelection == "SCISSORS"){
                
        if (computerSelection == "ROCK"){
            computerScore++;
            document.getElementById("message").innerHTML = "You lose. Rock beats Scissors";
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if (computerSelection == "PAPER"){
            playerScore++;
            document.getElementById("message").innerHTML = "You win. Scissors beats Paper";
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else if (computerSelection == "SCISSORS"){
            document.getElementById("message").innerHTML = "Draw";
        }
    }

    if (playerScore == 5){
        document.getElementById("winner").innerHTML = "GAME OVER. YOU WIN";
        playerScore = 0;
        computerScore = 0;
        document.getElementById("play").innerHTML = "Play Again";
        document.getElementById("play").style.display = "flex";
    }
    else if (computerScore == 5){
        document.getElementById("winner").innerHTML = "GAME OVER. YOU LOSE";
        playerScore = 0;
        computerScore = 0;
        document.getElementById("play").innerHTML = "Play Again";
        document.getElementById("play").style.display = "flex";
    }
}

    window.addEventListener('click', function(e){
        
        if (e.target.dataset.key == "ROCK" || e.target.dataset.key == "PAPER" || e.target.dataset.key == "SCISSORS"){
            playRound(e.target.dataset.key, computerPlay());
        };
        if (e.target.dataset.key == "PLAY"){
            document.getElementById("winner").innerHTML = "";
            document.getElementById("play").innerHTML = "";
            document.getElementById("play").style.display = "none";
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "";
        };
    });
    
    