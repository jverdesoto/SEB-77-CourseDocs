function init() {

    //CONSTS
const grid = document.querySelector(".grid")
console.log(grid)

//BOARD Config
const width = 20
const height = 20
const cellCount = width * height
let cells=[]
//CHARACTER CONFIG
const startingPosition = 0
let currentPosition = startingPosition


// ! FUNCTIONS
//CREATE CELLS
//using cellcount
function createGrid(){

    for (let i = 0; i < cellCount; i++ ){
    const cell = document.createElement("div")
    //add Index to div element
    // cell.innerText = i   //no need to show it so cell.id = i but data attributes better
    //add index as an attribute
    cell.dataset.index = i  //index could be anything since we use dataset   could also do cell.setattribute('data-index, i')
    //add the height and width to each grid cell (div)
    cell.style.height = `${100 / height}%`
    cell.style.width = `${100 / width}%`
    //add cell to grid
    grid.appendChild(cell)
    //add newly created cell to array
    cells.push(cell)
    }
    console.log(cells)
    
    addPacman(startingPosition)
    }
// ADD pacman CLASS
function addPacman(position){
    cells[position].classList.add("pacman")
}
// remove pacman class 
function removePacman(position){
    cells[currentPosition].classList.remove("pacman")
}

//handlemovement
function handleMovement(event){
    // console.log(event.keyCode)
    const left = "ArrowLeft" 
    const up = "ArrowUp"
    const right = "ArrowRight"
    const down = "ArrowDown"
    removePacman()
    // Remove pacman from previous position before updating current position to new cell
   

   console.log(currentPosition, width, currentPosition % width)


    if(event.key === up && currentPosition >= width){ // % height also works
        currentPosition -= width
       
    }else if(event.key === down && currentPosition + width <= cellCount -1){
        currentPosition += width
    }else if(event.key === right && currentPosition % width !== width -1){ //9 also works  // 
        currentPosition++ // or currentPosition++
    }else if(event.key === left && currentPosition % width !== 0){ //&& 
        currentPosition--
        // ! ask haw to hard code 
    }else if(event.key === right && currentPosition === 59){
        console.log("transport to 50")
        currentPosition === 50
        // !!!!
    } else {
        console.log("INVALID KEY")
    }
    // add pacman character class to starting position 
    
    addPacman(currentPosition)

}
// ! EVENTS
document.addEventListener("keydown", handleMovement)
// ! PAGE LOAD
createGrid()

}

window.addEventListener('DOMContentLoaded', init)