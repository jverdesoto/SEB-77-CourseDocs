/* ---------- constants ---------- */

const NOUGHT = "";
const CROSS = "";

const SHAPES = {
    "0": "SQUARE",
    "1": "NOUGHT",
    "-1": "CROSS",
}


/* ---------- state variables ---------- */

let board;
let turn;
let winner;
let colArr;
let rowIdx = 0;


/* ---------- cached elements ---------- */
const boardEls = [...document.querySelectorAll("#board > div")];
const messageEl = document.querySelector("h1");
const playAgainBtn = document.querySelector("button");

/* ---------- event listeners ---------- */

document.getElementById("board").addEventListener("click", handleChange);
playAgainBtn.addEventListener("click", init);


/* ---------- functions ---------- */
init();

function init(){
    board = [
        [0, 0, 0], //col 0
        [0, 0, 0], //col 1
        [0, 0, 0] //col 2
    ]
    
    turn = 1;
    winner = null;
    render();
    clearBoard();
}

function handleChange(evt){
    let caddy = evt.target;
    let divId = caddy.id;

    if (divId === -1 || divId > 8) return; 
    if (divId === "board") return;
    if (winner !== null) return;


    const cellEl = document.getElementById(divId);
    if (cellEl.classList.contains("nought") || cellEl.classList.contains("cross")) return;

    // this needs to be to check if there is a classname there already
   
    
    if (divId <= 2){
        colArr = 0;
    }else if (divId <= 5) {
        colArr = 1;
    } else { colArr = 2;}

    if (colArr === 0) {
        rowIdx =+ divId;
    } else if (colArr === 1){
        rowIdx =+ divId - 3;
    } else {rowIdx =+ divId -6}


    
    const boardArr = board[colArr];
     

    boardArr[rowIdx] = turn;
    
    turn *= -1;
    squareChange(divId);
    
    winner = getWinner();
    
    render();
}

function getWinner(){
    if ((board[0][0] + board[0][1] + board[0][2] === 3 || board[0][0] + board[0][1] + board[0][2] === -3) ||
    (board[1][0] + board[1][1] + board[1][2] === 3 || board[1][0] + board[1][1] + board[1][2] === -3) ||
    (board[2][0] + board[2][1] + board[2][2] === 3 || board[2][0] + board[2][1] + board[2][2] === -3) ||
    // horizontal
    (board[0][0] + board[1][0] + board[2][0] === 3 || board[0][0] + board[1][0] + board[2][0] === -3) ||
    (board[0][1] + board[1][1] + board[2][1] === 3 || board[0][1] + board[1][1] + board[2][1] === -3) ||
    (board[0][2] + board[1][2] + board[2][2] === 3 || board[0][2] + board[1][2] + board[2][2] === -3) ||
    // vertical
    (board[0][0] + board[1][1] + board[2][2] === 3 || board[0][0] + board[1][1] + board[2][2] === -3) ||
    (board[0][2] + board[1][1] + board[2][0] === 3 || board[0][2] + board[1][1] + board[2][0] === -3)
        ){return turn*-1;}
        else {return null;}
}

function squareChange(divId){
    const first = divId;
    const cellEl = document.getElementById(first);
    if (turn === -1){
       cellEl.className = "nought";
    } else if (turn === 1){
        cellEl.className = "cross";
    }
}

function render(){
    renderBoard();
    renderMessage();

    renderControls();
}

//currently cellEl is all divs
function renderBoard(){
    boardEls.forEach(function(divId){
        
        const cellEl = document.getElementById(divId.id);
        
    });
}

function renderMessage(){
    if(winner !== 1 && winner !== -1){messageEl.innerHTML = `<span>${(SHAPES[turn])}</span>'s Turn`}
    else if(winner === "T"){
        messageEl.innerText = "It's a tie!"
    } else if(winner){
        messageEl.innerHTML = `<span>${SHAPES[winner]}</span> Wins!`
    }
    
}

function renderControls(){
    playAgainBtn.style.visibility = winner ? "visible" : "hidden";
}

function clearBoard(){
    boardEls.forEach(function(element){
        element.classList.remove("nought", "cross");
    })
}



// checkHorizontalWin
// checkDiagonalWinNESW
// checkDiagonalWinNWSE
