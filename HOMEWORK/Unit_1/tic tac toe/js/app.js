const player1 = "X";
const player2 = "O";
let currPlayer = player1;
// let winner = null;

const displayCurrState = document.querySelector("h3");
const resetBtn = document.querySelector("button");
const cells = document.querySelectorAll(".container > div");

let isGameOver = false;

function addClick() {
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
}

function removeListener() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
  });
}

addClick();

function handleClick(e) {
  let cell = e.target;
  if (cell.innerHTML !== "") return;
  else if (currPlayer === player1) {
    cell.innerHTML = player1;
    cell.style.color = "#FF10F0";
    currPlayer = player2;
    displayCurrState.innerHTML = `${player2}'s TURN!`;
    displayCurrState.style.color = "#FFFF33";
  } else {
    cell.innerHTML = player2;
    cell.style.color = "#FFFF33";
    currPlayer = player1;
    displayCurrState.innerHTML = `${player1}'s TURN!`;
    displayCurrState.style.color = "#FF10F0";
  }
  checkWin();
}

function resetGame() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.style.backgroundColor = "black";
  });
  currPlayer = player1;
  displayCurrState.style.color = "#FF10F0";
  displayCurrState.innerHTML = `${player1}'s TURN!`;
  addClick();
}

resetBtn.addEventListener("click", resetGame);

function checkLine(a, b, c) {
  if (
    (player1 === cells[a].innerHTML &&
      player1 === cells[b].innerHTML &&
      player1 === cells[c].innerHTML) ||
    (player2 === cells[a].innerHTML &&
      player2 === cells[b].innerHTML &&
      player2 === cells[c].innerHTML)
  ) {
    displayCurrState.innerHTML = `${cells[a].innerHTML} WINS !!`;
    displayCurrState.style.color = "green";
    cells[a].style.backgroundColor = "rgba(68, 67, 67, 0.24)";
    cells[b].style.backgroundColor = "rgba(68, 67, 67, 0.24)";
    cells[c].style.backgroundColor = "rgba(68, 67, 67, 0.24)";
    removeListener();
  }
}

function checkWin() {
  checkLine(0, 1, 2);
  checkLine(3, 4, 5);
  checkLine(6, 7, 8);
  checkLine(0, 3, 6);
  checkLine(1, 4, 7);
  checkLine(2, 5, 8);
  checkLine(0, 4, 8);
  checkLine(2, 4, 6);
}
