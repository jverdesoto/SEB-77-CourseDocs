/*----- constants -----*/


	/*----- state variables -----*/
let board
let turn
let winner
const PLAYERS = {
    "0": "white", 
    "1": "X", 
    "-1": "O",
}



	/*----- cached elements  -----*/
const messageEl = document.querySelector("h1")
const playItAgainBtn = document.querySelector("button")
const xoxEls = [...document.querySelectorAll("#board > div")] //map goes through every one of them, ... spreads them
// you wont be able to use it as javascript array

	/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleDrop)
playItAgainBtn.addEventListener("click", init)  // no need fucntion bracets    every time i click playagain initilize the begining



	/*----- functions -----*/
    init()
function init() {
    board = [
        [0, 0, 0], //col 0
        [0, 0, 0], //col 1
        [0, 0, 0], //col 2
    ]
    turn = 1
    winner = null
    render()
}


function handleDrop(evt) {
    const colIdx = xoxEls.indexOf(evt.target)
    //safeguard for not found idx

    if ( colIdx === -1) return  // if it doesnt have an index it will return -1  index of something on a specific array and if tdoesnt have element it will return -1 java script
    //find column

    const colArr = board[colIdx]     // next available space
    //find the first available space
    const rowIdx = colArr.indexOf(0)
    //asign value to cell
    colArr[rowIdx] = turn
    //switch player
    turn *= -1  // after multiply it gets positive
    //after everyturn check winner
    winner = getWinner(colIdx, rowIdx)
    render()

}
function getWinner(colIdx, rowIdx){
    return checkVerticalWin(colIdx, rowIdx) ||
    checkHorizontalWin(colIdx, rowIdx) ||
    checkDiagonalWinNWSE(colIdx, rowIdx) ||
    checkDiagonalWinSWNE(colIdx, rowIdx) 

}
function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent (colIdx, rowIdx, 0, -1) === 2 ? board[colIdx][rowIdx] : null

}
function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
    return (adjCountLeft + adjCountRight) >= 2 ? board[colIdx][rowIdx] : null

}
function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
    const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
    return (adjCountNW + adjCountSE) >= 2 ? board[colIdx][rowIdx] : null


}
function checkDiagonalWinSWNE(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
    return (adjCountNE + adjCountSW) >= 2 ? board[colIdx][rowIdx] : null

}
function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {   //left coloffset up rowoffset up
    const player = board[colIdx][rowIdx]

    let  count = 0

    colIdx += colOffset
    rowIdx += rowOffset

    while (  //not to go overboard
        board[colIdx] !== undefined &&
        board[colIdx][rowIdx] !== undefined &&
        board[colIdx][rowIdx] === player
    ) {
        count ++
        colIdx += colOffset
        rowIdx += rowOffset
    }
    return count
}
function render() {
    renderBoard()
    renderMessage()
}



function renderBoard() {
    board.forEach( function(colArr, colIdx){
        colArr.forEach( function(celVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`   //no differencewith cellId = "c" + colIdx + "r" + rowIdx
            const cellEl = document.getElementById(cellId)
            cellEl.style = (`${PLAYERS[celVal]}`)
        })
    }) 
}
function renderMessage() {
    if (winner === "T") {
        messageEl.innerText = "Its a Tie!"
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${PLAYERS[winner]}">${PLAYERS[winner].toUpperCase()}</span> Wins!`  
    } else {
        messageEl.innerHTML = `<span style="color: ${PLAYERS[turn]}">${PLAYERS[turn].toUpperCase()}</span>'s Turn!`
    }
}