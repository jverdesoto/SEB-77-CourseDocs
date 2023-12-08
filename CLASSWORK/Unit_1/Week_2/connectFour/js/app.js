/* ---------- constants ---------- */

const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
};



/* ---------- state variables ---------- */

let board, turn, winner;

/* ---------- cached elements ---------- */

const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];


/* ---------- event listeners ---------- */

document.getElementById('markers').addEventListener('click', handleDrop);
playAgainBtn.addEventListener('click', init);


/* ---------- functions ---------- */

init()

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
    turn = 1;
    winner = null;
    render();

}

function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);

    if (colIdx === -1 ) return;

    const colArr = board[colIdx];
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    
    
    winner = getWinner(colIdx, rowIdx);

    turn *= -1;

    render();

}

function getWinner(colIdx, rowIdx) {
   return checkVerticalWin(colIdx, rowIdx)
        || checkHorizontalWin(colIdx, rowIdx)
        || checkDiagonalWinNESW(colIdx, rowIdx)
        || checkDiagonalWinNWSE(colIdx, rowIdx);


}

function checkVerticalWin(colIdx, rowIdx) {
    console.log(colIdx, rowIdx);
    return countAdjecent(colIdx, rowIdx, 0, -1) === 3 ? turn : null;
}

function checkHorizontalWin(colIdx, rowIdx) {
    const adjCountLeft = countAdjecent(colIdx, rowIdx, -1, 0);
    const adjCountRight = countAdjecent(colIdx, rowIdx, 1, 0);
    return (adjCountLeft + adjCountRight) >= 3 ? turn : null;

}

function checkDiagonalWinNESW(colIdx, rowIdx) {
    const adjCountNE = countAdjecent(colIdx, rowIdx, 1, 1);
    const adjCountSW = countAdjecent(colIdx, rowIdx, -1, -1);
    return (adjCountNE + adjCountSW) >= 3 ? turn : null;
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const adjCountNW = countAdjecent(colIdx, rowIdx, -1, 1);
    const adjCountSE = countAdjecent(colIdx, rowIdx, 1, -1);
    return (adjCountNW + adjCountSE) >= 3 ? turn : null;
}

function countAdjecent(colIdx, rowIdx, colOffset, rowOffset) {

    let count = 0;

    colIdx += colOffset;
    rowIdx += rowOffset;

    while (
        board[colIdx] !== undefined
        && board[colIdx][rowIdx] !== undefined
        && board[colIdx][rowIdx] === turn
    ) {
        count++;
        colIdx += colOffset;
        rowIdx += rowOffset;
    }
    return count;
}

function render() {
    renderBoard();
    renderMessage();

    renderControls();

}

function renderBoard() {
    board.forEach((colArr, colIdx) => {
        colArr.forEach((cellVal, rowIdx) => {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
        })

    })
}

function renderMessage() {
    if(winner === 'T') {
        messageEl.innerText = "It's a Tie!!";
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}"> ${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}'s</span> Turn`;
    }
}

function renderControls() {
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';

    markerEls.forEach((markerEl, colIdx) => {
        const hideMarker = !board[colIdx].includes(0) || winner;
        console.log(markerEl);
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    })
}