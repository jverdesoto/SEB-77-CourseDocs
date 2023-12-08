/* ---------- constants ---------- */

const PIECES = {
    '1': 'X',
    '0': '',
    '-1': 'O'
};
const ROWS = 3;
const COLS = 3;

/* ---------- state variables ---------- */

let board, turn, winner;

/* ---------- cached elements ---------- */

const messageEl = document.querySelector('h1');
const resetBtn = document. querySelector('button');
const cellEls = [...document.querySelectorAll('#board > div')];

/* ---------- event listeners ---------- */

document.getElementById('board').addEventListener('click', handleTurn);
resetBtn.addEventListener('click', init);

/* ---------- functions ---------- */

init() 

function init() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    turn = 1;
    winner = null;

    render();
}

function handleTurn(evt) {
    if (evt.target.innerText !== '' || winner) return;

    cellIdx = cellEls.indexOf(evt.target);
    rowIdx = Math.floor(cellIdx/ROWS);
    colIdx = cellIdx % COLS;
    board[rowIdx][colIdx] = turn;

    winner = getWinner(rowIdx, colIdx);
    turn *= -1;
 
    render();

}

function getWinner(rowIdx, colIdx) {
    return checkDraw()
        || checkVerticalWin(rowIdx, colIdx)
        || checkHorizontalWin(rowIdx, colIdx)
        || checkDiagonalWinNWSE(rowIdx, colIdx)
        || checkDiagonalWinNESW(rowIdx, colIdx)
}

function checkDraw() {
    return !board.some(row => row.includes(0)) ? 'T' : null;
}

function checkVerticalWin(rowIdx, colIdx) {
    const adjCountUp = countAdjecent(rowIdx, colIdx, -1, 0);
    const adjCountDown = countAdjecent(rowIdx, colIdx, 1, 0);
    return (adjCountUp + adjCountDown) === 2 ? turn : null;
}

function checkHorizontalWin(rowIdx, colIdx) {
    const adjCountLeft = countAdjecent(rowIdx, colIdx, 0, -1);
    const adjCountRight = countAdjecent(rowIdx, colIdx, 0, 1);
    return (adjCountLeft + adjCountRight) === 2 ? turn : null;
}

function checkDiagonalWinNWSE(rowIdx, colIdx) {
    const adjCountNW = countAdjecent(rowIdx, colIdx, -1, -1);
    const adjCountSE = countAdjecent(rowIdx, colIdx, 1, 1);
    return (adjCountNW + adjCountSE) === 2 ? turn : null;
}

function checkDiagonalWinNESW(rowIdx, colIdx) {
    const adjCountNE = countAdjecent(rowIdx, colIdx, -1, 1);
    const adjCountSW = countAdjecent(rowIdx, colIdx, 1, -1);
    return (adjCountNE + adjCountSW) === 2 ? turn : null;
}

function countAdjecent(rowIdx, colIdx, rowOffset, colOffset) {
    let count = 0;
    
    rowIdx += rowOffset;
    colIdx += colOffset;

    while (
        board[rowIdx] !== undefined
        && board[rowIdx][colIdx] !== undefined
        && board[rowIdx][colIdx] === turn
    ) {
        ++count;
        rowIdx += rowOffset;
        colIdx += colOffset;
    }
    return count;
}

function render() {
    renderBoard();

    renderMessage();
    renderControls();
}

function renderBoard() {
    board.forEach((row, rowIdx) => {
        row.forEach((cell, colIdx) => {
            const cellId = `r${rowIdx}c${colIdx}`
            const cellEl = document.getElementById(cellId);
            cellEl.innerText = PIECES[cell];
        })   
    })
}

function renderMessage() {
    if(winner === 'T') {
    messageEl.innerText = "It's a Draw!"
    } else if (winner) {
        messageEl.innerText = `${PIECES[winner]}s WIN!`
    } else {
        messageEl.innerText = `${PIECES[turn]}'s Turn`
    }
}

function renderControls() {
    resetBtn.style.visibility = winner ? 'visible' : 'hidden'

    cellEls.forEach((cell) => {
        cell.style.cursor = cell.innerText !== '' || winner ? 'default' : 'pointer';
    });
}