let cpuChoice;
let playChoice;
function getComputerChoice(){
   cpuChoice = Math.floor(Math.random() * 3)+1;
    switch(cpuChoice){
        case 1: cpuChoice="rock"; break;
        case 2:cpuChoice="paper"; break;
        case 3:cpuChoice="scissors"; break;
    }
    return cpuChoice;
}
function getPlayerChoice(playChoice){
    playChoice = prompt("Enter your decision Rock, Paper, Scissors: ","");
    return playChoice.toLowerCase();
}

function battleStart(playerSelection, computerSelection){
    playerSelection = getPlayerChoice(playChoice);
    if(playerSelection==computerSelection){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nIts a draw!");
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou lose!");
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors")
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");
    else if(playerSelection=="paper"&&computerSelection=="rock"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors")
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Lose!");
    else if(playerSelection=="scissors"&&computerSelection=="rock"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Lose!");
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper")
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");
}
function playGame(){
    
}
let playerSelection;
let computerSelection = getComputerChoice(cpuChoice);
console.log(battleStart(playerSelection, computerSelection));