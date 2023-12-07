// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.

/*----- constants -----*/
const TOKENS = {
    "0": "", //initial state
    "1": "0",
    "-1": "X",
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]
/*----- state variables -----*/
let gameBoard;
let turn;
let winner;

/*----- cached elements  -----*/
const messageEl = document.querySelector("h1")
const playAgainBtn = document.querySelector("button")
const boardEls = [...document.querySelectorAll("#board > div")]

const tile0= document.querySelector("#tile0")
const tile1= document.querySelector("#tile1")
const tile2= document.querySelector("#tile2")
const tile3= document.querySelector("#tile3")
const tile4= document.querySelector("#tile4")
const tile5= document.querySelector("#tile5")
const tile6= document.querySelector("#tile6")
const tile7= document.querySelector("#tile7")
const tile8= document.querySelector("#tile8")

const tiles = [tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8]

console.log(tiles)
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleDrop)
playAgainBtn.addEventListener("click", init)

/*----- functions -----*/
init()

function init() {
    gameBoard = [0, 0 ,0, 0, 0, 0, 0, 0, 0]
    turn = 1
    winner = null
    render()
}

function handleDrop(evt) {
    // obtain index of tile clicked
    const tileIdx = boardEls.indexOf(evt.target) 
    console.log(evt.target)   

    let random = evt.target
    //assign tile clicked to variable
    let random2 = random.id
    console.log(random2)
    
    // Update state (board, turn, winner)
    gameBoard[random2] = turn;
    turn *= -1;
    winner = getWinner();
    // Render updated state
    render();
  }

function getWinner () {
    //if one of the eight combos is true, winner === true
    for (let i = 0; i < winningCombos.length; i++) {
        //calculates the sum of values in the current winning combination
    if(Math.abs(gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3) return [gameBoard[0]];
    if (Math.abs(gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3) return [gameBoard[3]];
    if (Math.abs(gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3) return [gameBoard[6]];
    if (Math.abs(gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3) return [gameBoard[0]];
    if (Math.abs(gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3) return [gameBoard[1]];
    if (Math.abs(gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3) return [gameBoard[2]];
    if (Math.abs(gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3) return [gameBoard[0]];
    if (Math.abs(gameBoard[6] + gameBoard[4] + gameBoard[2]) === 3) return [gameBoard[6]];
    return null
    }
}

function render() {
    renderBoard()
    renderMessage()
    renderControls()
}

function renderBoard() {
    gameBoard.forEach(function(tileValue, tileIdx) { // iterate through each index of tile on board
      const tileEl = document.getElementById(`${tileIdx}`); //retrieves the html index with an id based on the current index
      tileEl.innerText = TOKENS[tileValue]; // sets the background color of the current tile element based on the value in the current gameboard
    //   (tileEl.className = !tileValue ? 'empty' : '')
      // If !tileValue is true (meaning tileValue is falsy), it sets the class to 'empty'; otherwise, it sets it to an empty string.
    });
  }

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!!"
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${TOKENS[winner]}">${TOKENS[winner].toUpperCase()}</span> Wins!`
    } else {
        messageEl.innerHTML = `<span style="color: ${TOKENS[turn]}">${TOKENS[turn].toUpperCase()}</span>'s Turn`
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? "visible" : "hidden"
}