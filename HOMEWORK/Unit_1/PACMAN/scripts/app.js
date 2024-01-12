function init() {

    //CONSTS
const grid = document.querySelector(".grid")
console.log(grid)

//BOARD Config
const width = 10
const height = 10
const cellCount = width * height
let cells=[]
//CHARACTER CONFIG
const pacmanstartingPosition = 2
let pacmancurrentPosition = pacmanstartingPosition
const catstartingPosition = 0
let catcurrentPosition = catstartingPosition


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
    
    addPacman(pacmanstartingPosition)
    addCat(catstartingPosition)
    }
// ADD pacman CLASS
function addPacman(pacmanposition){
    cells[pacmanposition].classList.add("pacman")
}
function addCat(catposition){
    cells[catposition].classList.add("cat")
}
// remove pacman class 
function removePacman(pacmanposition){
    cells[pacmancurrentPosition].classList.remove("pacman")
}
function removeCat(catposition){
    cells[catcurrentPosition].classList.remove("cat")
}

//handlemovement
function pacmanhandleMovement(event){
    // console.log(event.keyCode)
    const left = "ArrowLeft" 
    const up = "ArrowUp"
    const right = "ArrowRight"
    const down = "ArrowDown"
    removePacman()
    // Remove pacman from previous position before updating current position to new cell
   

   console.log(pacmancurrentPosition, width, pacmancurrentPosition % width)


    if(event.key === up && pacmancurrentPosition >= width){ // % height also works
        pacmancurrentPosition -= width
       
    }else if(event.key === down && pacmancurrentPosition + width <= cellCount -1){
        pacmancurrentPosition += width
    }else if(event.key === right && pacmancurrentPosition % width !== width -1){ //9 also works  // 
        pacmancurrentPosition++ // or currentPosition++
    }else if(event.key === left && pacmancurrentPosition % width !== 0){ //&& 
        pacmancurrentPosition--
        // ! ask haw to hard code 
    }else if(event.key === right && pacmancurrentPosition === 59){
        console.log("transport to 50")
        pacmancurrentPosition === 50
        // !!!!
    } else {
        console.log("INVALID KEY")
    }
    // add pacman character class to starting position 
    
    addPacman(pacmancurrentPosition)

}

//cathandlemovement
function cathandleMovement(event){
    // console.log(event.keyCode)
    const catleft = "a" 
    const catup = "w"
    const catright = "d"
    const catdown = "s"
    removeCat()
    // Remove pacman from previous position before updating current position to new cell
   

   console.log(catcurrentPosition, width, catcurrentPosition % width)


    if(event.key === catup && catcurrentPosition >= width){ // % height also works
        catcurrentPosition -= width
       
    }else if(event.key === catdown && catcurrentPosition + width <= cellCount -1){
        catcurrentPosition += width
    }else if(event.key === catright && catcurrentPosition % width !== width -1){ //9 also works  // 
        catcurrentPosition++ // or currentPosition++
    }else if(event.key === catleft && catcurrentPosition % width !== 0){ //&& 
        catcurrentPosition--
        // ! ask haw to hard code 
    }else if(event.key === catright && catcurrentPosition === 59){
        console.log("transport to 50")
        catcurrentPosition === 50
        // !!!!
    } else {
        console.log("INVALID KEY")
    }
    // add pacman character class to starting position 
    
    addCat(catcurrentPosition)

}
// ! EVENTS
document.addEventListener("keydown", pacmanhandleMovement)
document.addEventListener("keydown", cathandleMovement)
// ! PAGE LOAD
createGrid()

}

window.addEventListener('DOMContentLoaded', init)