
// const numberBtns = [zero, one, two, three, four, five, six, seven, eight, nine]

// Get Elements
const display = document.getElementById('screen')
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const square = document.getElementById('square')
const root = document.getElementById('root')
const clear = document.getElementById('clear')
const decimal = document.getElementById('decimal')
const equals = document.getElementById('equals')

const numbersArr = [zero.innerText, one.innerHTML, two.innerText, three.innerText, four.innerText, five.innerText, six.innerText, seven.innerText, eight.innerText, nine.innerText]
// const operatorsArr = [add.innerText, subtract.innerText, divide.innerText, multiply.innerText]

let inputs = []
let operator = []


decimal.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = decimal.innerText
    } else {
        display.innerText = display.innerText + decimal.innerText
    }

})

zero.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = zero.innerText
    } else {
        display.innerText = display.innerText + zero.innerText
    }

})

one.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = one.innerText
    } else {
        display.innerText = display.innerText + one.innerText
    }


})

two.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = two.innerText
    } else {
        display.innerText = display.innerText + two.innerText
    }


})

three.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = three.innerText
    } else {
        display.innerText = display.innerText + three.innerText
    }


})

four.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = four.innerText
    } else {
        display.innerText = display.innerText + four.innerText
    }


})

five.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = five.innerText
    } else {
        display.innerText = display.innerText + five.innerText
    }


})

six.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = six.innerText
    } else {
        display.innerText = display.innerText + six.innerText
    }


})

seven.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = seven.innerText
    } else {
        display.innerText = display.innerText + seven.innerText
    }


})

eight.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = eight.innerText
    } else {
        display.innerText = display.innerText + eight.innerText
    }


})

nine.addEventListener('click', function(event) {
    if (display.innerText === '0.') {
        display.innerText = nine.innerText
    } else {
        display.innerText = display.innerText + nine.innerText
    }


})

clear.addEventListener('click', function(event) {
    display.innerText = '0.'
    inputs = []
    operator = []

})

add.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    display.innerText = '0.'
    operator.push('add')
})

subtract.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    display.innerText = '0.'
    operator.push('subtract')

})

divide.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    display.innerText = '0.'
    operator.push('divide')

})

multiply.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    display.innerText = '0.'
    operator.push('multiply')

})

square.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    inputs.push(display.innerText)
    let inputsNum = inputs.map(Number)
    display.innerText = inputsNum[0] * inputsNum[0]
    inputs = []
    operator = []

})

root.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    inputs.push(display.innerText)
    let inputsNum = inputs.map(Number)
    display.innerText = Math.sqrt(inputsNum[0])
    inputs = []
    operator = []

})

equals.addEventListener('click', function(event) {
    inputs.push(display.innerText)
    let inputsNum = inputs.map(Number)
    // console.log(inputsNum);
    // console.log(operator);
    if(operator[0] === 'add') {
        display.innerText = inputsNum[0] + inputsNum[1]
        inputs = []
        operator = []
    } else if(operator[0] === 'subtract') {
        display.innerText = inputsNum[0] - inputsNum[1]
        inputs = []
        operator = []
    } else if(operator[0] === 'divide') {
        display.innerText = inputsNum[0] / inputsNum[1]
        inputs = []
        operator = []
    } else if(operator[0] === 'multiply') {
        display.innerText = inputsNum[0] * inputsNum[1]
        inputs = []
        operator = []
    }

})

// Keypresses

document.addEventListener('keydown', function(event) {
    let name = event.key;
    let code = event.code;

    if (display.innerText === '0.' && numbersArr.includes(name)) {
        display.innerText = name
    } else if (display.innerText !== '0.' && numbersArr.includes(name)) {
        display.innerText = display.innerText + name
    } else if (name.shiftKey && name === '+') {
        inputs.push(display.innerText)
        display.innerText = '0.'
        operator.push('add')
    } else if (name === 'c' || name === 'Backspace') {
        display.innerText = '0.'
        inputs = []
        operator = []
    } else if (name === '/') {
        inputs.push(display.innerText)
        display.innerText = '0.'
        operator.push('divide')
    } else if (name === '+') {
        inputs.push(display.innerText)
        display.innerText = '0.'
        operator.push('add')
    } else if (name === '-') {
        inputs.push(display.innerText)
        display.innerText = '0.'
        operator.push('subtract')
    } else if (name === '*') {
        inputs.push(display.innerText)
        display.innerText = '0.'
        operator.push('multiply')
    } else if (name === 'Enter') {
        inputs.push(display.innerText)
        let inputsNum = inputs.map(Number)
        if(operator[0] === 'add') {
            display.innerText = inputsNum[0] + inputsNum[1]
            inputs = []
            operator = []
        } else if(operator[0] === 'subtract') {
            display.innerText = inputsNum[0] - inputsNum[1]
            inputs = []
            operator = []
        } else if(operator[0] === 'divide') {
            display.innerText = inputsNum[0] / inputsNum[1]
            inputs = []
            operator = []
        } else if(operator[0] === 'multiply') {
            display.innerText = inputsNum[0] * inputsNum[1]
            inputs = []
            operator = []
        }
    }


})