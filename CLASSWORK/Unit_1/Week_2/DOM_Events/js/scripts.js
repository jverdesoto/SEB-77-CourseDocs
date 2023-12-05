// Crete basic HTML/JavaScript calculator

// The HTML is ready for you, so is the styling

// Please all all the events and functions needed in the scripts.js file to make your calculator work with button clicks.

// If you finish before the time is up, please add key press functionality to it as well.



// Select the button

const btnNumbers = document.querySelectorAll(".button", ".[button__number]")
const btnOperation = document.querySelectorAll(".button", ".[button__operation]")
const btnClear = document.querySelector("#clear")
const btnEquals = document.querySelector("#equals")
const btnSquare = document.querySelector("#square")
const btnRoot = document.querySelector("#root")
const btnSubtract = document.querySelector("#subtract")
const btnMultiply = document.querySelector("#multiply")
const btnDivide = document.querySelector("#divide")
const displayedNumber = document.querySelector("#screen")
const btnAdd = document.querySelector("#add")

class Calculate {
    constructor(displayedNumber) {
        this.displayedNumber = displayedNumber
        this.screenClear()
    } 
    screenClear() {
        this.display = ""
    }
    appendNumber(number) { 
        this.display = this.display + number
    }
    calculate(){
    }
    compute(){
    }
    updateDisplay(number){
        this.displayedNumber.innerHTML = this.display
    }
    add(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        result = num1 + num2;
      }
    subtract(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        result = num1 - num2;
      }
    multiply(num1, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        result = num1 * num2;
      }
    divide(num1, num2) {
        if (num2 != 0) {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          result = num1 / num2;
        } else {
          result = 'ERROR';
        }
      }
    my_square(num1) {
        num1 = parseFloat(num1);
        result = Math.pow(num1, 2);
      }
    my_root(num1) {
        num1 = parseFloat(num1);
        result = Math.sqrt(num1);
      }
}

// Attach event listener to our button
// this.operation = undefined
const calculator = new Calculate(displayedNumber)

    btnNumbers.forEach(key => {
        key.addEventListener("click", () => {
        calculator.appendNumber(key.innerHTML)
        calculator.updateDisplay()
        })
    })
    btnClear.addEventListener("click", button => {
        calculator.screenClear()
        calculator.updateDisplay()
    })
    btnOperation.forEach(key => {
        key.addEventListener("click", () => {
        calculator.updateDisplay()
        })
    })











