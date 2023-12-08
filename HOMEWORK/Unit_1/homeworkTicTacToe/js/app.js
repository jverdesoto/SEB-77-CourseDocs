


const message = document.querySelector('H1')
const resetButton = document.querySelector('button')
const boxes = document.querySelectorAll('#board > div')
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = false

init()

function init() {
    boxes.forEach(box => box.addEventListener("click", boxClicked))
        resetButton.addEventListener("click", restartGame)
        message.textContent = `${currentPlayer}'s Turn`
        running = true
    }

function boxClicked() {
    const boxIndex = this.getAttribute('id')
    if(options[boxIndex] !== "" || !running){
        return
    }
    updateBox(this, boxIndex)
    checkWinner()
}

function updateBox(box, boxIndex) {
    options[boxIndex] = currentPlayer
    box.textContent = currentPlayer
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    message.textContent= `${currentPlayer}'s turn`
}

function checkWinner() {
    let roundWon = false
    for(let i=0; i < winConditions.length; i++){
        const condition = winConditions[i]
        const boxA = options[condition[0]]
        const boxB = options[condition[1]]
        const boxC = options[condition[2]]    

        if(boxA === "" || boxB === "" || boxC === "") {
            continue;
        }
        if(boxA === boxB && boxB === boxC){
            roundWon = true
            break
        }
    }
    if(roundWon){
        message.textContent = `${currentPlayer} wins!`
        running = false
    }
    else if(!options.includes("")){
        message.textContent = "Draw!"
    } else {
        changePlayer()
    }
}

function restartGame() {
    currentPlayer = "X"
    options = ["", "", "", "", "", "", "", "", ""]
    message.textContent = `${currentPlayer}'s turn`
    boxes.forEach(box => box.textContent = "")
    running = true
}




