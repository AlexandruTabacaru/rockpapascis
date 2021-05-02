const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const yourScore=document.querySelector('.your-score');
const compScore=document.querySelector('.computer-score');



const compRes=["rock", "paper", "scissors"];
 
function computerPlay(){
    return compRes[Math.floor(Math.random()*3)];
}


let winnerComputer=0;
let winnerPlayer=0;



    function playRound(playerSelection, computerSelection){
    
   
  
        if(playerSelection==="rock" && computerSelection==="paper"){ winnerComputer=++winnerComputer;
            /*return "You lose! paper beats rock"*/}
        else if(playerSelection==="rock" && computerSelection==="scissors"){winnerPlayer=++winnerPlayer;
             /*return "You win! rock beats scissors"*/}
        else if(playerSelection==="paper" && computerSelection==="scissors"){winnerComputer=++winnerComputer;
            /*return "You lose! scissors beat paper"*/}
        else if(playerSelection==="paper" && computerSelection==="rock"){ winnerPlayer=++winnerPlayer;
            /*return "You win! paper beats rock"*/}
        else if(playerSelection==="scissors" && computerSelection==="rock"){winnerComputer=++winnerComputer;
            /* return "You lose! rock beats scissors" */}
        else if(playerSelection==="scissors" && computerSelection==="paper"){winnerPlayer=++winnerPlayer;
            /*return "You win! scissors beat paper"*/}
            /*else {return "It's a draw!"}*/
    
    
    }   

    rock.addEventListener('click', ()=>{
        playRound('rock', computerPlay());
        if(winnerComputer==5){alert('Computer wins!'); winnerPlayer=0; winnerComputer=0;}
        else if(winnerPlayer==5){alert('You win!'); winnerPlayer=0; winnerComputer=0;}
        yourScore.textContent=winnerPlayer;
        compScore.textContent=winnerComputer;
    });
    paper.addEventListener('click', ()=>{
        playRound('paper', computerPlay());
        if(winnerComputer==5){alert('Computer wins!'); winnerPlayer=0; winnerComputer=0;}
        else if(winnerPlayer==5){alert('You win!'); winnerPlayer=0; winnerComputer=0;}
        yourScore.textContent=winnerPlayer;
        compScore.textContent=winnerComputer;
    });
    scissors.addEventListener('click', ()=>{
        playRound('scissors', computerPlay());
        if(winnerComputer==5){alert('Computer wins!'); winnerPlayer=0; winnerComputer=0;}
        else if(winnerPlayer==5){alert('You win!'); winnerPlayer=0; winnerComputer=0;}
        yourScore.textContent=winnerPlayer;
        compScore.textContent=winnerComputer;
    });
    












