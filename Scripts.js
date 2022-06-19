let computerChoiceDisplay = document.getElementById('computerChoice');
let userChoiceDisplay = document.getElementById('yourChoice');
let resultDispaly = document.getElementById('result');

let possibleChoices = document.querySelectorAll('button');
let userChoice;

let scoreDisplay = document.getElementById(id="score");
let verdictDisplay = document.getElementById(id="verdict");


function computerPlay() {
    const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let choice = pickOne(["rock", "paper", "scissors"]);

    return choice;
}

let winner = "";
let computerSelection;
let playerSelection;
function playRound(playerSelection, computerSelection) {
        
       
        
        if (computerSelection == playerSelection) {
                winner = "Its a tie";
                return winner;
        }
        else if (computerSelection == "rock" && playerSelection == "scissors") {
                winner = "Computer won";
                return winner;
        }
        else if (computerSelection == "rock" && playerSelection == "paper") {
                winner = "You won"
                return winner;
        }
        else if (computerSelection == "paper" && playerSelection == "rock") {
                winner = "Computer won";
                return winner;
        }
        else if (computerSelection == "paper" && playerSelection == "scissors") {
                winner = "You won"
                return winner;
        }
        else if (computerSelection == "scissors" && playerSelection == "paper") {
                winner = "Computer won";
                return winner;
        }
        else if (computerSelection == "scissors" && playerSelection == "rock") {
                winner = "You won";
                return winner;
        }

}

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>
{
    
    userChoice = e.target.id
    computerSelection = computerPlay();
    winner = playRound( userChoice, computerSelection);
    userChoiceDisplay.innerText = userChoice
    computerChoiceDisplay.innerText = computerSelection
    resultDispaly.innerText= winner;
    game();
    verdict();

}) )

let playerScore = 0;
let computerScore = 0;
function game() {

         {
                //possibleChoices();

                if (winner== "You won") {
                        playerScore++;


                }
                else if (winner == "Computer won") {
                        computerScore++;

                }
                else {
                        winner == "This round doesnt count";
                        //i--;
                }
                
        scoreDisplay.innerText= +playerScore+"/ "+computerScore;
        }
}      

function verdict(){
        if((playerScore>=5)||( computerScore>=5))
        {
        if (playerScore > computerScore) {
                verdictDisplay.innerText="Congratulations, You won this game!!";
        }
        else if (computerScore > playerScore) {
            verdictDisplay.innerText="Sorry, Computer won this game..";
        }
        }


}
let newgame = document.querySelector("#newgame")
newgame.addEventListener('click', button=>{
        location.reload();
})

