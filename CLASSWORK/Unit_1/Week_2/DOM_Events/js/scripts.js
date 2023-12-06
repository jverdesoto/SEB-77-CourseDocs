let valOne = ""
let valTwo = ""
let operation = ""
let result = 0

const one = document.getElementById('one')
const two = document.getElementById ('two')
const three = document.getElementById ('three')
const four = document.getElementById ('four')
const five = document.getElementById ('five')
const six = document.getElementById ('six')
const seven = document.getElementById ('seven')
const eight = document.getElementById ('eight')
const nine = document.getElementById ('nine')
const zero = document.getElementById ('zero')
const add= document.getElementById('add')
const equals = document.getElementById ('equals')
const square = document.getElementById ('square')
const root = document.getElementById ('root')
const subtract = document.getElementById ('subtract')
const multiply = document.getElementById ('multiply')
const decimal = document.getElementById ('decimal')
const divide = document.getElementById ('divide')
const clear = document.getElementById ('clear')

// document.addEventListener('keydown',function(evt){
//     console.log(evt)

// })

one.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"1"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"1"
        document.getElementById("screen").innerText = valTwo 
    }
})
two.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"2"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"2"
        document.getElementById("screen").innerText = valTwo 
    }
})
three.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"3"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"3"
        document.getElementById("screen").innerText = valTwo 
    }
})
four.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"4"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"4"
        document.getElementById("screen").innerText = valTwo 
    }
})
five.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"5"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"5"
        document.getElementById("screen").innerText = valTwo 
    }
})
six.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"6"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"6"
        document.getElementById("screen").innerText = valTwo 
    }
})
seven.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"7"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"7"
        document.getElementById("screen").innerText = valTwo 
    }
})
eight.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"8"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"8"
        document.getElementById("screen").innerText = valTwo 
    }
})
nine.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"9"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"9"
        document.getElementById("screen").innerText = valTwo 
    }
})
zero.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"0"
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"0"
        document.getElementById("screen").innerText = valTwo 
    }
})
decimal.addEventListener('click',function(){
    if (operation==="" ) {
        valOne=valOne+"."
    document.getElementById("screen").innerText = valOne
    } else {
        valTwo=valTwo+"."
        document.getElementById("screen").innerText = valTwo 
    }
})
add.addEventListener('click' , function (){
    operation = 'add'
})

equals.addEventListener('click',function (){
    if ( operation === 'add') {
        addF (valOne, valTwo)
    }
    document.getElementById('screen').innerText = result
})

function addF (valOne , valTwo) {
    valOne = parseFloat(valOne)
    valTwo =parseFloat (valTwo)
    result = valOne + valTwo
}

subtract.addEventListener('click' , function (){
    operation = 'subtract'
})

equals.addEventListener('click',function (){
    if ( operation === 'subtract') {
        subtractF (valOne, valTwo)
    }
    document.getElementById('screen').innerText = result
})

function subtractF (valOne , valTwo) {
    valOne = parseFloat(valOne)
    valTwo =parseFloat (valTwo)
    result = valOne - valTwo
}

multiply.addEventListener('click' , function (){
    operation = 'multiply'
})

equals.addEventListener('click',function (){
    if ( operation === 'multiply') {
        multiplyF (valOne, valTwo)
    }
    document.getElementById('screen').innerText = result
})

function multiplyF (valOne , valTwo) {
    valOne = parseFloat(valOne)
    valTwo =parseFloat (valTwo)
    result = valOne * valTwo
}

divide.addEventListener('click' , function (){
    operation = 'divide'
})

equals.addEventListener('click',function (){
    if ( operation === 'divide') {
        divideF (valOne, valTwo)
    }
    document.getElementById('screen').innerText = result
})

function divideF (valOne , valTwo) {
    valOne = parseFloat(valOne)
    valTwo =parseFloat (valTwo)
    result = valOne / valTwo
}
// square.addEventListener('click' , function (){
//     operation = 'square'
// })

square.addEventListener('click', function(){
        squareF (valOne)
    
    document.getElementById('screen').innerText = result
})

function squareF (valOne) {
    valOne = parseFloat(valOne)
    result = valOne*valOne   
}

root.addEventListener('click', function(){
    rootF (valOne)

document.getElementById('screen').innerText = result
})

function rootF (valOne) {
valOne = parseFloat(valOne)
result = Math.sqrt(valOne);
}

clear.addEventListener('click', function () {
    valOne = "";
    valTwo = "";
    operation = "";
    result = 0;
    document.getElementById('screen').innerText = result;
});

