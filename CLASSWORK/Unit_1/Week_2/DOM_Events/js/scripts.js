const display = document.getElementById('screen')
const clear = document.getElementById('clear')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')
const square = document.getElementById('square')
const root = document.getElementById('root')
const decimal = document.getElementById('decimal')

let firstValue = ''
let secondValue = ''
let operation = ''
let result = 0

document.addEventListener('keydown', handleKey)
// document.addEventListener('keydown', logNumber)
// document.addEventListener('keydown', logOperation)
// document.addEventListener('keydown', logResult)

function handleKey(e) {
    let name = e.key
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(name)) {
        logNumber(e)
    } else if (['+', '-', '*', '/'].includes(name)) {
        logOperation(e)
    } else if (['=', 'Enter'].includes(name)) {
        logResults(e)
    } else if (['c', 'Backspace', 'Escape'].includes(name)) {
        clearCalc(e)
    }

}

function logNumber(e) {
    console.log(e.key)
    if (operation === '') {
    firstValue = firstValue + e.key
    display.innerText = firstValue 
    } else {
    secondValue = secondValue + e.key
    display.innerText = secondValue
    }
}

function logOperation(e) {
    console.log(e)
    let name = e.key
    if (name === '+') {
        operation = '+'
    } else if (name === '-') {
        operation = '-'
    } else if (name === '*') {
        operation = '*'
    } else if (name === '/') {
        operation = '/'
    }
}

function logResults(e) {
    if (operation === '+') {
        addF(firstValue, secondValue)
    } 
    else if (operation === '-') {
        subtractF(firstValue, secondValue)
    }
    else if (operation === '*') {
        multiplyF(firstValue, secondValue)
    }
    else if (operation === '/') {
        divideF(firstValue, secondValue)
    }
    display.innerText = result
    firstValue = result
}

function clearCalc(e) {
    firstValue = ""
    secondValue = ""
    operation = ""
    result = ""
    display.innerText = '0.'
}



one.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '1'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '1'
    display.innerText = secondValue
    }
})

two.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '2'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '2'
    display.innerText = secondValue
    }
})
three.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '3'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '3'
    display.innerText = secondValue
    }
})
four.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '4'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '4'
    display.innerText = secondValue
    }
})
five.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '5'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '5'
    display.innerText = secondValue
    }
})
six.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '6'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '6'
    display.innerText = secondValue
    }
})
seven.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '7'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '7'
    display.innerText = secondValue
    }
})
eight.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '8'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '8'
    display.innerText = secondValue
    }
})
nine.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '9'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '9'
    display.innerText = secondValue
    }
})
zero.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '0'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '0'
    display.innerText = secondValue
    }
})
decimal.addEventListener('click', function() {
    if (operation === '') {
    firstValue = firstValue + '.'
    display.innerText = firstValue
    } else {
    secondValue = secondValue + '.'
    display.innerText = secondValue
    }
})



add.addEventListener('click', function(){ 
    operation = '+'
})
subtract.addEventListener('click', function(){ 
    operation = '-'
})
multiply.addEventListener('click', function(){ 
    operation = '*'
})
divide.addEventListener('click', function(){ 
    operation = '/'
})


function addF(firstValue, secondValue) {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    result = firstValue + secondValue
}

function subtractF(firstValue, secondValue) {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    result = firstValue - secondValue
}

function multiplyF(firstValue, secondValue) {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    result = firstValue * secondValue
}

function divideF(firstValue, secondValue) {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)
    result = firstValue / secondValue
}

function squareF(firstValue) {
    firstValue = parseFloat(firstValue)
    result = firstValue * firstValue
}
function rootF(firstValue) {
    firstValue = parseFloat(firstValue)
    result = Math.sqrt(firstValue)
}


root.addEventListener('click', function(){ 
    operation = '@'
    rootF(firstValue)
    display.innerText = result
    firstValue = result
    operation = ''
})
square.addEventListener('click', function(){ 
    operation = '#'
    squareF(firstValue)
    display.innerText = result
    firstValue = result
    operation = ''
})

equals.addEventListener('click', function() {
    if (operation === '+') {
        addF(firstValue, secondValue)
    } 
    else if (operation === '-') {
        subtractF(firstValue, secondValue)
    }
    else if (operation === '*') {
        multiplyF(firstValue, secondValue)
    }
    else if (operation === '/') {
        divideF(firstValue, secondValue)
    }
    display.innerText = result
    firstValue = result
    secondValue = ''
    operation = ''
})


clear.addEventListener('click', function() {
        firstValue = ""
        secondValue = ""
        operation = ""
        result = ""
        display.innerText = '0.'
    })

// one.setAttribute('value', 1)
// two.setAttribute('value', 2)
// three.setAttribute('value', 3)
// four.setAttribute('value', 4)
// five.setAttribute('value', 5)
// six.setAttribute('value', 6)
// seven.setAttribute('value', 7)
// eight.setAttribute('value', 8)
// nine.setAttribute('value', 9)
// zero.setAttribute('value', 0)



    
// const buttons = document.getElementById('container__buttons')
// let number = document.querySelectorAll('button__number')
// buttons.addEventListerner('click', function() {
//     display.value = number.value
//     display.innerText = display.value
// })

// let arr = [];
// let str = ""
// function printNum(e) {
//     if (e.target.value === '+' || e.target.value === '-' || e.target.value === '*' || e.target.value === '%')
// }


// number.addEventListener('click', function(num) {
//     display.value = num.innerText
//     display.innerText = display.value
// })
