const numberButtons = document.querySelectorAll('.button__number')
const operationButtons = document.querySelectorAll('.button__operation')
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')
const displayScreen = document.querySelector('#screen')
const squareButton = document.querySelector('#square')
const rootButton = document.querySelector('#root')

let val1 = ''
let val2 = ''
let selectedOperation = ''
let result

//code to display the number button click
numberButtons.forEach(function(button){
    button.addEventListener('click', function(){
        if (selectedOperation === '') {
            val1 = val1 + button.textContent
            displayScreen.textContent = val1 }
        else {
            val2 = val2 + button.textContent
            displayScreen.textContent = val2
        }
    })
})

  document.getElementById('add').addEventListener('click', function () {
    selectedOperation = 'add';
  });
  document.getElementById('subtract').addEventListener('click', function () {
    selectedOperation = 'subtract';
  });
  document.getElementById('multiply').addEventListener('click', function () {
    selectedOperation = 'multiply';
  });
  document.getElementById('divide').addEventListener('click', function () {
    selectedOperation = 'divide';
  });


//implement functionality for clear button
clearButton.addEventListener('click', function(){
    displayScreen.textContent = ''
    val1 = ''
    val2 = ''
    selectedOperation = ''
    result = ''
})


//implemnting functionaility for equals button
equalsButton.addEventListener('click', function(){
    result = calculateResult(val1, val2, selectedOperation)
    displayScreen.innerHTML = result
})


function calculateResult(val1, val2, operation) {
    val1 = parseFloat(val1)
    val2 = parseFloat(val2)


    if (operation === 'add') {
        result = val1 + val2;
      } else if (operation === 'subtract') {
        result = val1 - val2;
      } else if (operation === 'multiply') {
        result = val1 * val2;
      } else if (operation === 'divide') {
        result = val1 / val2;
      }

      return result;
}

    squareButton.addEventListener('click', function(){
        if (val1 !== '') {
            const squaredValue = Math.pow(parseFloat(val1), 2)
            displayScreen.innerHTML = squaredValue
        }
    })


    rootButton.addEventListener('click', function(){
        if (val1 !== '') {
            const squareRoot = Math.sqrt(parseFloat(val1))
            displayScreen.innerHTML = squareRoot
        }
    })

    document.addEventListener('keydown', function(event){
        const key = event.key
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            handleKeyPress(key)
        } else if (key === 'Enter') {
            handleEquals()
        }
    })

    function handleKeyPress(key) {
        displayScreen.textContent +=key
    }


    function handleEquals() {
        if (val1 !== '' && val2 !== '' && selectedOperation !== '') {
            result = calculateResult(val1, val2, selectedOperation)
            displayScreen.innerHTML = result
        }
    }