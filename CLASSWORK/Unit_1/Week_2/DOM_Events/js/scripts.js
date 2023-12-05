const btnDisplay = document.querySelector('#screen');
const btnInput = document.querySelector('.container__buttons');

let currentNum = '';
let firstNum = '';
let currentOperation = '';

function updateDisplay() {
    btnDisplay.textContent = currentNum || '0.';
}

 btnInput.addEventListener('click', function (input) {
     const clickedBtn = input.target;
     if (clickedBtn.classList.contains('button__number')) {
         handleNumberClick(clickedBtn.textContent);
     } else if (clickedBtn.classList.contains('button__operation')) {
         handleMathClick(clickedBtn.textContent);
     } else if (clickedBtn.id === 'equals') {
         handleEqualsClick();
     } else if (clickedBtn.id === 'clear') {
         handleClearClick();
     }
 });

 function handleNumberClick(number) {
     currentNum += number;
     updateDisplay();
}
    
function handleMathClick(operation) {
     if (currentNum !== '') {
        if (firstNum !== '') {
         performCalc();
        } else {
            firstNum = currentNum;
        }
         currentNum = '';
         currentOperation = operation;
      }
      
    }

function performCalc() {
    if (firstNum !== '' && currentNum !== '') {
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(currentNum);

    const math = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => {
                if (num2 === 0) {
                    alert('Error: Division by zero');
                    return;
                } else {
                    return a / b;
                }
            },
            'root': (a) => Math.sqrt(a),
            'square': (a) => a * a,
        };
        
    const symbolFunction = math[currentOperation];
        if (symbolFunction) {
            let result = symbolFunction(num1, num2).toString();
            currentNum = result;
            firstNum = '';
            currentOperation = '';
            updateDisplay();
        }
    }
}

function handleEqualsClick(){
    performCalc();
}

function handleClearClick() {
    currentNum = '';
    firstNum = '';
    currentOperation = '';
    updateDisplay();
}
