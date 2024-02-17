let cpuChoice;
let playChoice;
let score;
let player=0;
let cpu=0;
let playerSelection;
let computerSelection;
function getComputerChoice(){
   cpuChoice = Math.floor(Math.random() * 3)+1;
    switch(cpuChoice){
        case 1: cpuChoice="rock"; break;
        case 2:cpuChoice="paper"; break;
        case 3:cpuChoice="scissors"; break;
    }
    return cpuChoice;
}
function getPlayerChoice(){
    const btn = document.querySelector('#btn');
    btn.addEventListener('click',(event)=>{
        let target = event.target;
        switch(target.id){
            case 'rock':
                playChoice="rock";
                console.log(playChoice);
                break;
            case 'paper':
                playChoice="paper";
                console.log(playChoice);
                break;
            case 'scissors':
                playChoice="scissors";
                console.log(playChoice);
                break;
              
        }
        battleStart();
     
        
     });


}
function battleStart(){
    computerSelection=  getComputerChoice(cpuChoice);
    playerSelection = playChoice;
    if(playerSelection==computerSelection){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nIts a draw!");
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou lose!"); cpu++;
    }
    else if(playerSelection=="rock"&&computerSelection=="scissors"){
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");
    player++;}
    else if(playerSelection=="paper"&&computerSelection=="rock"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");player++;
    }
    else if(playerSelection=="paper"&&computerSelection=="scissors"){
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Lose!");cpu++;}
    else if(playerSelection=="scissors"&&computerSelection=="rock"){
        console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Lose!");cpu++;
    }
    else if(playerSelection=="scissors"&&computerSelection=="paper"){
    console.log("Player: "+playerSelection+" Cpu: "+computerSelection+"\nYou Win!");player++;
}}
/*function playGame(){
    for (i=0;i<5;i++){
        battleStart();
    console.log(`Score Player: ${player} Score Cpu: ${cpu}`);
    }
    if(player>cpu){
        console.log(`You win! congrats`);
    }
    else if(player<cpu){
        console.log(`You lose! better luck next time`);
    }
    else{
        console.log(`Its a draw!`);
    }
}*/

    getPlayerChoice();