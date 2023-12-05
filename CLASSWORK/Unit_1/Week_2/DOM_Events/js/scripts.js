// Crete basic HTML/JavaScript calculator

// The HTML is ready for you, so is the styling

// Please all all the events and functions needed in the scripts.js file to make your calculator work with button clicks.

// If you finish before the time is up, please add key press functionality to it as well.



// Select the button


const btnNumbers = document.querySelectorAll(".button__number")
const btnOperation = document.querySelectorAll(".button__operation")
const btnClear = document.querySelector("#clear")
const btnEquals = document.querySelector("#equals")
const btnSquare = document.querySelector("#square")
const btnRoot = document.querySelector("#root")
const btnSubtract = document.querySelector("#subtract")
const btnMultiply = document.querySelector("#multiply")
const btnDivide = document.querySelector("#divide")
const displayedNumber = document.querySelector("#screen")
const btnAdd = document.querySelector("#add")

let value1
let value2
let result = 0
    function screenClear() {
        display = ""
    }
    function appendNumber(number) { 
        display = displayedNumber.innerHTML 
        display = display + number
    }
    function calculate(){
    }
    function showResult(){
    }
    function updateDisplay(number){
        displayedNumber.innerHTML = display
    }
    function chooseOperation(operation) {
        display= operation
    }


    function add(value1, value2) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        result = value1 + value2;
      }

    function subtract(value1, value2) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        result = value1 - value2;
      }
    function multiply(value1, value2) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        result = value1 * value2;
      }
    function divide(value1, value2) {
        if (value2 != 0) {
          value1 = parseFloat(value1);
          value2 = parseFloat(value2);
          result = value1 / 2;
        } else {
          result = 'ERROR';
        }
      }
    function my_square(value1) {
        value1 = parseFloat(value1);
        result = Math.pow(value1, 2);
      }
    function my_root(value1) {
        value1 = parseFloat(value1);
        result = Math.sqrt(value1);
      }


// Attach event listener to our button
// this.operation = undefined

    btnNumbers.forEach(key => {
        key.addEventListener("click", () => {
        appendNumber(key.innerHTML)
        updateDisplay()
        })
    })
    btnClear.addEventListener("click", button => {
        screenClear()
        updateDisplay()
    })
    btnOperation.forEach(key => {
        key.addEventListener("click", () => {
        // document.getElementById('screen').innerHTML = value1
        chooseOperation(key.innerHTML)
        updateDisplay()
        })
    })
    btnEquals.addEventListener("click", button => {
        // document.getElementById('screen').innerHTML = value2
        screenClear()
        updateDisplay()
        showResult()
    })







