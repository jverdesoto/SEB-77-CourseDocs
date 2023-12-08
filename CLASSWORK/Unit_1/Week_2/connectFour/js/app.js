/* --------constants--------- */

const COLORS = {
    '0' : 'white',
    '1' : 'purple',
    '-1' : 'orange',
}

/* --------state variables-------- */

let board;
let turn;
let winner;

/*------- cached elements---------*/

const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const markerEls = [...document.querySelectorAll('#markers > div')]

/*--------event listeners---------*/

document.getElementById('markers').addEventListener('click', handleDrop)
playAgainBtn.addEventListener('click', init)

/*--------functions---------*/

init ()

function init() {
    board = [
        [0, 0, 0, 0, 0, 0], //col 0
        [0, 0, 0, 0, 0, 0], //col 1
        [0, 0, 0, 0, 0, 0], //col 2
        [0, 0, 0, 0, 0, 0], //col 3
        [0, 0, 0, 0, 0, 0], //col 4
        [0, 0, 0, 0, 0, 0], //col 5
        [0, 0, 0, 0, 0, 0], //col 6
    ]
    turn = 1
    winner = null
    render()
}

function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target)

    // safeguard for not recognized ids
    if (colIdx === -1) return //what happens if clicked anywhere else ? are the rest of the functions just not executed ?

    // find the column
    const colArr = board[colIdx] //where is board coming from ?
    // find the first available space
    const rowIdx =colArr.indexOf(0)

    // assign value to cell
    colArr[rowIdx] = turn

    // switch the player
    turn *= -1

    // after every turn check for a winner
    winner = getWinner(colIdx, rowIdx)
    render()
}

function getWinner(colIdx, rowIdx) {
    return checkVerticalWin(colIdx, rowIdx) || 
           checkHorizontalWin(colIdx, rowIdx) || 
           checkDiagonalWinNWSW(colIdx, rowIdx) || 
           checkDiagonalWinNWSE(colIdx, rowIdx)
}

function checkDiagonalWinNWSW(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
    return (adjCountNE + adjCountSW) >= 3 ? board[colIdx][rowIdx] : null
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
    const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
    return (adjCountNW + adjCountSE) >= 3 ? board[colIdx][rowIdx] : null
}

function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
    return (adjCountLeft + adjCountRight) >= 3 ? board[colIdx][rowIdx] : null
}

function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    const player = board[colIdx][rowIdx]

    let count = 0 

    colIdx += colOffset
    rowIdx += rowOffset

    while (
        board[colIdx] !== undefined && board[colIdx][rowIdx] !== undefined && board[colIdx][rowIdx] === player
    ) {
        count++
        colIdx += colOffset
        rowIdx += rowOffset
    }
    return count
}

function render() {
    renderBoard()
    renderMessage()
    renderControls()
}

function renderBoard() {
    board.forEach( function(colArr, colIdx) {
        colArr.forEach( function(celVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            cellEl.style.backgroundColor = COLORS[celVal]
        })
    })
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "It's a Tie!"
    } else if (winner) {
        messageEl.innerHTML = `<span style= "color: ${COLORS[winner]}"> ${COLORS[winner].toUpperCase()}</span> Wins!`
    } else {
        messageEl.innerHTML = `<span style= "color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden'; 

    markerEls.forEach( function(markerEl, collIdx) {
        const hideMarker = !board[collIdx].includes(0) || winner

        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    })
}


