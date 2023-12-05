const calculator = document.querySelector('.container__buttons')
calculator.addEventListener('click', handleClick);

document.addEventListener('keydown', handlePress);

const screen = document.getElementById('screen');

let firstEntry = {};
let isDecimal = false;
const singleOperations = ['square', 'root'];
const multipleOperations = ['add', 'subtract', 'multiply', 'divide'];
const keypressDict = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    '^': 'square',
    '=': 'equals',
    'Enter': 'equals',
    'c': 'clear',
    'C': 'clear'
}

function handleClick(event) {

    if (event.target.id === 'decimal') {
        isDecimal = true;
    } else if([...event.target.classList].includes('button__number')) {
        handleNumber(event.target.innerText);
    } else if (singleOperations.includes(event.target.id)) {
        handleSingleOperation(event.target.id);
    } else if (multipleOperations.includes(event.target.id)) {
        handleMultipleOperation(event.target.id);
    } else if (event.target.id === 'clear') {
        handleClear();
    } else if (event.target.id === 'equals') {
        handleEquals();
    }
}

function handlePress(event) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const keypress = event.key;
    const keypressMethod = keypressDict[keypress]
    if (numbers.includes(keypress)) {
        handleNumber(keypress)
    } else if(keypress === '.') {
        isDecimal = true;
    } else if(singleOperations.includes(keypressMethod)) {
        handleSingleOperation(keypressMethod);
    } else if(multipleOperations.includes(keypressMethod)) {
        handleMultipleOperation(keypressMethod);
    } else if(keypressMethod === 'clear') {
        handleClear();
    } else if(keypressMethod === 'equals') {
        handleEquals();
    }
}


function handleNumber(value) {

    let screenValues = screen.innerText.split('.');
    if(!isDecimal) {
        screenValues[0] === '0' 
            ? screenValues[0] = value
            : screenValues[0] += value
    } else {
        screenValues[1] += value;
    }
    screen.innerText = screenValues.join('.');
}

function handleClear() {
    screen.innerText = '0.';
}

function handleSingleOperation(operation) {
    if(operation === 'square') {
        screen.innerText = screen.innerText ** 2;
    } else {
        screen.innerText = Math.sqrt(screen.innerText);
    }
    isDecimal = false;
}

function handleMultipleOperation(operation) {
    firstEntry.value = screen.innerText;
    firstEntry.operation = operation;
    handleClear();
    isDecimal = false;
}

function handleEquals() {
    if (Object.keys(firstEntry).length !== 0) {
        let value = 0;
        switch (firstEntry.operation) {
            case 'add':
                value = add(firstEntry.value, screen.innerText);
                break;
            case 'subtract':
                value = subtract(firstEntry.value, screen.innerText)
                break;
            case 'multiply':
                value = multiply(firstEntry.value, screen.innerText)
                break;
            case 'divide':
                value = divide(firstEntry.value, screen.innerText)
                break;
        }
        value % 1 ? screen.innerText = value : screen.innerText = value + '.';
        firstEntry = {};
        isDecimal = false;
    }
}


function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}


