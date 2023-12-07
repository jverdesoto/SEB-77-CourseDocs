/* ---------- constants ----------*/
const PLAYER = {
    '0': '',
    '1': 'X',
    '-1': 'O',
}



/* ---------- state variables ----------*/
let board
let turn
let winner


/* ---------- cached elements ----------*/
const messageEl = document.querySelector('h1')
const resetBtn = document.getElementById('reset')
const playspaceEls = [...document.querySelectorAll('.playspace')]



/* ---------- event listeners ----------*/
resetBtn.addEventListener('click', init)
playspaceEls.forEach(button => {
    button.addEventListener('click', handlePlay)
})


/* ---------- functions ----------*/
init()

function init() {
    board = [
        [0, 0, 0], // col 0
        [0, 0, 0], // col 1
        [0, 0, 0], // col 2
    ]

    turn = 1
    winner = null
    render ()
}

function render() {
    renderBoard()
    renderMessage()
    renderControls()
}

function renderBoard () {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(celVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`
            const cellEl = document.getElementById(cellId)
            cellEl.innerText = PLAYER[celVal]
            if (cellEl.innerText === 'X') {
                cellEl.style.color = 'deeppink' 
            } else if (cellEl.innerText === 'O') {
                cellEl.style.color = 'lime' 
        }})
    })
    playspaceEls.forEach(button => {
        button.removeAttribute("disabled")
    })
    
}


function renderMessage () {
    if (winner === 'T') {
        messageEl.innerText = "It's a draw!"
    } else if (winner) {
        messageEl.innerText = `${PLAYER[winner]} win!`
    } else {
        messageEl.innerText = `${PLAYER[turn]}'s turn`
    }
}

function renderControls() {
    const arr = []
    board.map(el => {
        el.map(e => {
            arr.push(e)
        })
    }) 

    if (arr.includes(0) && winner){
        playspaceEls.forEach(button => {
            button.setAttribute('disabled', 'disabled')
        })
    } else {
        return winner = 'T'
    }
}

function handlePlay (evt) {
    const colIdx = playspaceEls.indexOf(evt.target) % 3

    let rowIdx = playspaceEls.indexOf(evt.target)


    if (rowIdx === 1 || rowIdx === 2) {
        rowIdx = 0
    } else if (rowIdx === 3 || rowIdx === 4 || rowIdx === 5) {
        rowIdx = 1
    } else if (rowIdx === 6 || rowIdx === 7 || rowIdx === 8) {
        rowIdx = 2
    }


    if(board[rowIdx][colIdx] === 0) {
        board[rowIdx][colIdx] = turn
        turn *= -1
    }

    winner = getWinner(colIdx, rowIdx)

    render()

}

function getWinner(colIdx, rowIdx) {
    return checkWinnerVertical(colIdx, rowIdx) ||
    checkWinnerHorizontal(colIdx, rowIdx) ||
    checkWinnerTLBR(colIdx, rowIdx) ||
    checkWinnerTRBL(colIdx, rowIdx)
    
}
function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
    const player = board[rowIdx][colIdx]
    let count = 0

    colIdx += colOffset
    rowIdx += rowOffset

    console.log();
    while (board[rowIdx] !== undefined && board[rowIdx][colIdx] !== undefined && board[rowIdx][colIdx] === player) {
        count ++
        colIdx += colOffset
        rowIdx += rowOffset
    }

    return count
}

function checkWinnerVertical(colIdx, rowIdx) {
    const adjCountUp = countAdjacent(colIdx, rowIdx, 0, -1)
    const adjCountDown = countAdjacent(colIdx, rowIdx, 0, 1)
    return (adjCountUp + adjCountDown) >= 2 ? board[rowIdx][colIdx] : null
}

function checkWinnerHorizontal(colIdx, rowIdx) {
    const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0)
    
    const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0)
    
    return (adjCountLeft + adjCountRight) >= 2 ? board[rowIdx][colIdx] : null
}

function checkWinnerTLBR(colIdx, rowIdx) {
    const adjCountNW = countAdjacent(colIdx, rowIdx, 1, -1)
    const adjCountSE = countAdjacent(colIdx, rowIdx, -1, 1)
    return (adjCountNW + adjCountSE) >= 2 ? board[rowIdx][colIdx] : null
}

function checkWinnerTRBL(colIdx, rowIdx) {
    const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1)
    const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1)
    return (adjCountNE + adjCountSW) >= 2 ? board[rowIdx][colIdx] : null
}