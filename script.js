function getComputerChoice(){
    let x = Math.floor(Math.random()*3 + 1);
    if (x==1){
        return "Rock" ;
    }
    else {
        if(x==2){
            return "Paper";
        }
        else {
            return "Scissors";
        }
    } 
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (computerSelection === "Rock"){
        if (playerSelection === "Paper"){
            return "You win ! Paper beats Rock";
        }
        else if (playerSelection === "Scissors"){
            return "You lose ! Rock beats Scissors ";
        }
        else{
            return "It's a tie";
        }
    }
    else if (computerSelection === "Paper"){
        if (playerSelection === "Scissors"){
            return "You win ! Paper beats Scissors";
        }
        else if (playerSelection === "Rock"){
            return "You lose ! Paper beats Rock ";
        }
        else{
            return "It's a tie";
        }
    }
    else{
        if (playerSelection === "Rock"){
            return "You win ! Rock beats Scissors";
        }
        else if (playerSelection === "Paper"){
            return "You lose ! Scissors beats Paper ";
        }
        else{
            return "It's a tie";
        }
    }
}
function capitalize(string){
    return (string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1));
}
for (let i=0;i<5;i++){
    let playerSelection = prompt("Rock , Paper or Scissors !");
    playerSelection=capitalize(playerSelection);
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
}

  