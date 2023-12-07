/*----- constants -----*/
const LETTERS = {
  '0': '',
  '1': '<span class="letterX">X</span>',
  '-1': '<span class="letterO">O</span>', 
}

/*----- state variables -----*/
let board;
let turn;
let winner;

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardSquares = [...document.querySelectorAll('#board > div')]

/*----- event listeners -----*/
playAgainBtn.addEventListener('click', init)
document.getElementById('board').addEventListener('click', handleDrop);

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
    removeFireworks();
}

function handleDrop(evt) {
    const cellId = evt.target.id;
    const colIdx = parseInt(cellId.charAt(1));
    const rowIdx = parseInt(cellId.charAt(3)); 
    if (board[colIdx][rowIdx] !== 0 || winner) return; 

    board[colIdx][rowIdx] = turn;
    turn *= -1
    winner = getWinner(colIdx, rowIdx);
    render();
}


function render() {
    renderBoard();
    renderMessage();
    renderControls();
    renderFireworks();
  }
  
  function renderBoard() {
          board.forEach(function(colArr, colIdx) {
              colArr.forEach(function(celVal, rowIdx) {
                  const cellId = `c${colIdx}r${rowIdx}`
                  const cellEl = document.getElementById(cellId)
                  cellEl.innerHTML = LETTERS[celVal]
          });
      }
    )}
      
  function renderMessage() {
          const allCellsFilled = board.every(row => row.every(cell => cell !== 0));
          if (allCellsFilled) {
              messageEl.innerText = "It's a Draw!!"
          } else if (winner) {
              messageEl.innerHTML = `${LETTERS[winner].toUpperCase()} Wins!`
          } else {
              messageEl.innerHTML = `${LETTERS[turn].toUpperCase()}'s Turn`
          }
      }
      
  function renderControls() {
          playAgainBtn.style.visibility = winner ? 'visible' : 'hidden'
          }
  
  function renderFireworks() {
          if (winner) {
            const fireworksContainer = document.createElement('div');
            fireworksContainer.classList.add('fireworks-container');
            document.body.appendChild(fireworksContainer);
          
             
            for (let i = 0; i < 10; i++) {
              const fireworkEl = document.createElement('div');
              fireworkEl.classList.add('firework');
              fireworksContainer.appendChild(fireworkEl);
            }
          
            setTimeout(() => {
              fireworksContainer.remove();
              }, 1500);
            }
          }

  function removeFireworks() {
          const fireworksContainer = document.querySelector('.fireworks-container');
          if (fireworksContainer) {
            fireworksContainer.remove(); // Remove fireworks container if present
            }
          }
  
          



function getWinner(colIdx, rowIdx) {
  return checkVerticalWin(colIdx, rowIdx) ||
  checkHorizontalWin(colIdx, rowIdx) ||
  checkDiagonalWinNESW(colIdx, rowIdx) ||
  checkDiagonalWinNWSE(colIdx, rowIdx);
}

function checkDiagonalWinNWSE(colIdx, rowIdx) {
  const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1);
  const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1);
  return (adjCountNW + adjCountSE) >= 2 ? board[colIdx][rowIdx] : null;
}

function checkDiagonalWinNESW(colIdx, rowIdx) {
  const adjCountNE = countAdjacent(colIdx, rowIdx, 1, 1);
  const adjCountSW = countAdjacent(colIdx, rowIdx, -1, -1);
  return (adjCountNE + adjCountSW) >= 2 ? board[colIdx][rowIdx] : null;
}

function checkHorizontalWin(colIdx, rowIdx) {
  const adjCountLeft = countAdjacent(colIdx, rowIdx, -1, 0);
  const adjCountRight = countAdjacent(colIdx, rowIdx, 1, 0);
  return (adjCountLeft + adjCountRight) >= 2 ? board[colIdx][rowIdx] : null;
}

function checkVerticalWin(colIdx, rowIdx) {
  const adjCountUp = countAdjacent(colIdx, rowIdx, 0, -1)
  const adjCountDown = countAdjacent(colIdx, rowIdx, 0, 1)
  return (adjCountDown + adjCountUp) >= 2 ? board[colIdx][rowIdx] : null;
}

function countAdjacent(colIdx, rowIdx, colOffset, rowOffset) {
  const player = board[colIdx][rowIdx];
  let count = 0;
  colIdx += colOffset;
  rowIdx += rowOffset;
  while (
    board[colIdx] !== undefined &&
    board[colIdx][rowIdx] !== undefined &&
    board[colIdx][rowIdx] === player
    ) {
      count++;
      colIdx += colOffset;
      rowIdx += rowOffset;
    }
    return count;
  }
