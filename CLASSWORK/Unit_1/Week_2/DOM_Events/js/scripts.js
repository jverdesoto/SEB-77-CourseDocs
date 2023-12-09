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
let operation = ''
    function screenClear() {
        display = ""
        operation = undefined
    }
    function appendNumber(number) { 
        display = displayedNumber.innerHTML 
        display = display + number
    }

    document.getElementById('add').addEventListener('click', function () {
      operation = 'add';
    });
    document.getElementById('subtract').addEventListener('click', function () {
      operation = 'subtract';
    });
    document.getElementById('multiply').addEventListener('click', function () {
      operation = 'multiply';
    });
    document.getElementById('divide').addEventListener('click', function () {
      operation = 'divide';
    });
    function calculate(){
      let computation
      value1 = parseFloat(value1)
      value2 = parseFloat(value2)
      switch (operation) {
        case "add":
          computation = value1 + value2
          break
        case "subtract":
          computation = value1 - value2
          break
        case "multiply":
          computation = value1 * value2
          break
          default:
            return
      }
      console.log(computation)
      display = computation
      operation = undefined

    }
    function showResult(){
    }
    function updateDisplay(number){
        displayedNumber.innerHTML = display
    }
    function chooseOperation(operation) {
        display = ""
    }

// these are from joe
    // function add(value1, value2) {
    //     value1 = parseFloat(value1);
    //     value2 = parseFloat(value2);
    //     result = value1 + value2;
    //   }

    // function subtract(value1, value2) {
    //     value1 = parseFloat(value1);
    //     value2 = parseFloat(value2);
    //     result = value1 - value2;
    //   }
    // function multiply(value1, value2) {
    //     value1 = parseFloat(value1);
    //     value2 = parseFloat(value2);
    //     result = value1 * value2;
    //   }
    // function divide(value1, value2) {
    //     if (value2 != 0) {
    //       value1 = parseFloat(value1);
    //       value2 = parseFloat(value2);
    //       result = value1 / 2;
    //     } else {
    //       result = 'ERROR';
    //     }
    //   }
    // function my_square(value1) {
    //     value1 = parseFloat(value1);
    //     result = Math.pow(value1, 2);
    //   }
    // function my_root(value1) {
    //     value1 = parseFloat(value1);
    //     result = Math.sqrt(value1);
    //   }


// Attach event listener to our button
// this.operation = undefined


    btnNumbers.forEach(key => {
      screenClear()
      updateDisplay()
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
          let value1= display
        document.querySelector("#screen").innerHTML = value1
        chooseOperation()
        updateDisplay()
         //separate operations

        })
    })
    btnEquals.addEventListener("click", button => {
        document.querySelector("#screen").innerHTML = value2
          calculate()
          console.log(calculate())
          updateDisplay()
        
        })
     // if (operation === 'add') {
          //   console.log(add(val1, val2))
            
          // } else if (operation === 'subtract') {
          //   subtract(val1, val2);
          // } else if (operation === 'multiply') {
          //   multiply(val1, val2);
          // } else if (operation === 'divide') {
          //   divide(val1, val2);
          // }
  //   document.getElementById('add').addEventListener('click', function () {
  //     operation = 'add';
  //   });
  //   document.getElementById('subtract').addEventListener('click', function () {
  //     operation = 'subtract';
  //   });
  //   document.getElementById('multiply').addEventListener('click', function () {
  //     operation = 'multiply';
  //   });
  //   document.getElementById('divide').addEventListener('click', function () {
  //     operation = 'divide';
  //   });
  // })
    


    









