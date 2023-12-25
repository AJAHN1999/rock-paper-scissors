
const ROUNDS = 5;
function getComputerChoice() {
    const options = [3, 1, 2]
    let choice = Math.floor(Math.random() * options.length);
    // get random item
    let item = options[choice];
    return item;
}

function playerChoice() {
    const player = parseInt(prompt("enter your choice:\n1)Paper\n2)Scissors\n3)Rock"));
    if (player > 3 || player < 1) {
        playerChoice()
    }
    return player
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

function playRound(playerSelection, computerSelection) {
    //let playerFinalScore=0;
    //let computerFinalScore=0;
    console.log('PLAYER SELECTION IS ' + playerSelection)
    console.log('COMPUTER SELECTION IS ' + computerSelection)
    let scores = logic(playerSelection, computerSelection);
    playerScore = scores[0]
    computerScore = scores[1]
    tieScores = scores[2]
    // playerFinalScore+=playerScore;
    // computerFinalScore+=computerScore;
    return [playerScore, computerScore, tieScores]
}


function game() {

    for (i = 0; i < ROUNDS; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = playerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result[2] == 1) {
            i--
            console.log('it is a draw')
        }
        else if (result[0] > result[1]) { console.log('player wins') }
        else { console.log('computer wins') }
    }
}




game();
