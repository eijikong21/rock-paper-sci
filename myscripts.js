let cpuChoice;
let playChoice;
function getComputerChoice(){
   cpuChoice = Math.floor(Math.random() * 3)+1;
    switch(cpuChoice){
        case 1: cpuChoice="Rock"; break;
        case 2:cpuChoice="Paper"; break;
        case 3:cpuChoice="Scissors"; break;
    }

}
function getPlayerChoice(){
    playChoice = prompt("Enter your decision Rock, Paper, Scissors: ","");
    battleStart();
}

function battleStart(){
    if(cpuChoice==playChoice){
        console.log("Player: "+playChoice+" Cpu: "+cpuChoice+"\nIts a draw!");
    }
}
getComputerChoice();
getPlayerChoice();

console.log(cpuChoice)