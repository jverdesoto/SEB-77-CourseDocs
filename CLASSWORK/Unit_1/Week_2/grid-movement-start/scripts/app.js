function init() {

    //CONSTS
const grid = document.querySelector(".grid")
console.log(grid)

//BOARD Config
const width = 10 
const height = 10
const cellCount = width * height
//CHARACTER CONFIG
const startingPosition = 0
let currentPosition = 0
let cells=[]

// ! FUNCTIONS
//CREATE CELLS
//using cellcount
for (let i = 0; i < cellCount; i++ ){
    const cell = document.createElement("div")
    //add Index to div element
    cell.innerText = i   //no need to show it so cell.id = i but data attributes better
    //add index as an attribute
    cell.dataset.index = i  //index could be anything since we use dataset   could also do cell.setattribute('data-index, i')
    //add the height and width to each grid cell (div)
    cell.style.height = `${100 / height}%`
    cell.style.width = `${100 / width}%`
    //add cell to grid
    grid.appendChild(cell)
    //add newly created cell to array

    console.log(i)
}

// ! EVENTS


// ! PAGE LOAD

}

window.addEventListener('DOMContentLoaded', init)