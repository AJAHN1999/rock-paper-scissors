
const ROUNDS = 5;
function getComputerChoice() {
    let textToDisplay;
    const options = [3, 1, 2]
    let choice = Math.floor(Math.random() * options.length);
    // get random item
    
    document.querySelector('.computerChoice').textContent=`Computer Choice:  ${convertChoice(choice)}`;
    let item = options[choice];
    return item;
}
function convertChoice(choice){
    if(choice===1){
        textToDisplay='Paper';
        return textToDisplay;
    }
    else if(choice==2){
        textToDisplay='Scissors';
        return textToDisplay;
    }
    else{
        textToDisplay='Rock';
        return textToDisplay;
    }
}

function playerChoice(event) {
    return event.target.value;
 }

function logic(pS, cS) {
    let pScore = 0;
    let cScore = 0;
    let tieScore = 0;
    if (((pS > cS) || (cS > pS)) && ((pS == 3 || pS == 1) && (cS == 3 || cS == 1))) {
        if (pS > cS) { cScore++ }
        else { pScore++ }
    }
    else if (pS < cS) { cScore++ }
    else if (pS > cS) { pScore++ }
    else { tieScore++ }
    return [pScore, cScore, tieScore]
}

let playerFinalScore=0;
let computerFinalScore=0;

function playRound(playerSelection, computerSelection) { 
    console.log('PLAYER SELECTION IS ' + playerSelection)
    console.log('COMPUTER SELECTION IS ' + computerSelection)
    let scores = logic(playerSelection, computerSelection);
    playerScore = scores[0]
    computerScore = scores[1]
    tieScores = scores[2]
    playerFinalScore+=playerScore;
    computerFinalScore+=computerScore;
    document.querySelector('.scoreKeeper').textContent=`Player:${playerFinalScore} - Computer:${computerFinalScore}`;
    return [playerScore, computerScore, tieScores]
}
prompts=['rock!!','paper!!','scissors!!'];


function displayPrompt(){
index=0;
const rpsPrompt = document.querySelector('.rpsPrompt');
rpsPrompt.textContent=prompts[index];
prompts.splice(index,1);
if(prompts.length!=0){setTimeout(displayPrompt,1000)}
else{prompts=['rock!!','paper!!','scissors!!'];}
};




function game(number) {
        let computerSelection = getComputerChoice();
        let playerSelection=number;
        document.querySelector('.playerChoice').textContent=`Player Choice:  ${convertChoice(number)}`
        //if(isNaN(playerSelection)){console.log('player choice is Nan');}
        if(playerFinalScore==5||computerFinalScore==5){
            if(playerFinalScore==5){
                playerFinalScore=0;
                computerFinalScore=0;
                document.querySelector('#message').textContent='Player wins the game!!';
                return;
            }
            else if(computerFinalScore==5){
                computerFinalScore=0;
                playerFinalScore=0;
                document.querySelector('#message').textContent='Computer wins the game!!';
                return;}
        }
        let result = playRound(playerSelection, computerSelection);
        if (result[2] == 1) {
            document.querySelector('#message').textContent='it is a draw';
            console.log('it is a draw')
        }
        else if (result[0] > result[1]) { console.log('player wins') 
        document.querySelector('#message').textContent='player wins';}
        else { console.log('computer wins') 
        document.querySelector('#message').textContent='computer wins';}
}



function startGame(){
    document.querySelector('.playButton').addEventListener('click',()=>{
        displayPrompt();
        document.querySelector('.rockButton').addEventListener('click',()=>{game(3)});
        document.querySelector('.paperButton').addEventListener('click',()=>{game(1)});
        document.querySelector('.scissorsButton').addEventListener('click',()=>{game(2)});

    })
}

startGame();