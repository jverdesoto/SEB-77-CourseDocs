// For some reason, after doing one calculation and clearing the display, (first calculation calculates correctly), 
// A value is kept and used/ messes up all future calculations, unless you refresh the page. 
// Couldn't work out how to fix this!
// Also the number keystrokes work fine, but the symbols (+ / *) don't.

const zeroBtn = document.querySelector("#zero")
const oneBtn = document.querySelector("#one")
const twoBtn = document.querySelector("#two")
const threeBtn = document.querySelector("#three")
const fourBtn = document.querySelector("#four")
const fiveBtn = document.querySelector("#five")
const sixBtn = document.querySelector("#six")
const sevenBtn = document.querySelector("#seven")
const eightBtn = document.querySelector("#eight")
const nineBtn = document.querySelector("#nine")
const squareBtn = document.querySelector("#square")
const rootBtn = document.querySelector("#root")
const clearBtn = document.querySelector("#clear")
const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")
const multiplyBtn = document.querySelector("#multiply")
const decimalBtn = document.querySelector("#decimal")
const equalsBtn = document.querySelector("#equals")
const divideBtn = document.querySelector("#divide")
const display = document.querySelector("#screen")

zeroBtn.addEventListener("click", function () { displayValue("0")})
oneBtn.addEventListener("click", function () { displayValue("1")})
twoBtn.addEventListener("click", function () {  displayValue("2")})
threeBtn.addEventListener("click", function () {  displayValue("3")})
fourBtn.addEventListener("click", function () {  displayValue("4")})
fiveBtn.addEventListener("click", function () {  displayValue("5")})
sixBtn.addEventListener("click", function () {  displayValue("6")})
sevenBtn.addEventListener("click", function () {  displayValue("7")})
eightBtn.addEventListener("click", function () {  displayValue("8")})
nineBtn.addEventListener("click", function () {  displayValue("9")})
decimalBtn.addEventListener("click", function () { displayValue(".")})

document.addEventListener("keydown", function(event) { if (event.key === "1") { document.getElementById("one").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "2") { document.getElementById("two").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "3") { document.getElementById("three").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "4") { document.getElementById("four").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "5") { document.getElementById("five").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "6") { document.getElementById("six").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "7") { document.getElementById("seven").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "8") { document.getElementById("eight").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "9") { document.getElementById("nine").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "0") { document.getElementById("zero").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "c") { document.getElementById("clear").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "+") { document.getElementById("add").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "-") { document.getElementById("subtract").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "*") { document.getElementById("multiply").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "/") { document.getElementById("divide").click();}});
document.addEventListener("keydown", function(event) { if (event.key === "Enter") { document.getElementById("equals").click();}});
document.addEventListener("keydown", function(event) { if (event.key === ".") { document.getElementById("decimal").click();}});

let currentDisplay = "0"

let operator = ""
let value1 = ""
let value2 = ""
let result = ""

function displayValue (number) {
    if (currentDisplay === "0") {
        currentDisplay = document.querySelector(".display").innerText = number
    } else {
        currentDisplay = document.querySelector(".display").innerText += number
    }
}
clearBtn.addEventListener("click", function () { 
clearDisplay()
})

function clearDisplay() {
    display.innerText = "";
    operator = ""
    value1 = "0"
    value2 = "0"
    result = "0"
}

rootBtn.addEventListener("click", function () {
    value1 = parseFloat(currentDisplay)
     if (value1 > 0) {
        result = (Math.sqrt(value1))
        equalsBtn.addEventListener("click", function () {
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})

squareBtn.addEventListener("click", function () { 
    value1 = parseFloat(currentDisplay)
    if (value1 > 0) {
        result = (value1 * value1)
        equalsBtn.addEventListener("click", function () {
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})

addBtn.addEventListener("click", function () {
    value1 = parseFloat(currentDisplay)

    if (value1 > 0) {
        currentDisplay = document.querySelector(".display").innerText = ""
        equalsBtn.addEventListener("click", function () {

        value2 = parseFloat(currentDisplay)
        result = (value1 + value2)
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})

subtractBtn.addEventListener("click", function () {
    value1 = parseFloat(currentDisplay)
    if (value1 > 0) {
        currentDisplay = document.querySelector(".display").innerText = ""
        equalsBtn.addEventListener("click", function () {

        value2 = parseFloat(currentDisplay)
        result = (value1 - value2)
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})

multiplyBtn.addEventListener("click", function () {
    value1 = parseFloat(currentDisplay)
    if (value1 > 0) {
        currentDisplay = document.querySelector(".display").innerText = ""
        equalsBtn.addEventListener("click", function () {

        value2 = parseFloat(currentDisplay)
        result = (value1 * value2)
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})

divideBtn.addEventListener("click", function () {
    value1 = parseFloat(currentDisplay)
    if (value1 > 0) {
        currentDisplay = document.querySelector(".display").innerText = ""
        equalsBtn.addEventListener("click", function () {

        value2 = parseFloat(currentDisplay)
        result = (value1 / value2)
        currentDisplay = document.querySelector(".display").innerText = result
        })
    }
})


// addBtn.addEventListener("click", function () { 
//     operator = "add"
// })
// subtractBtn.addEventListener("click", function () { 
//     operator = "subtract"
// })
// multiplyBtn.addEventListener("click", function () { 
//     operator = "multiply"
// })
// divideBtn.addEventListener("click", function () { 
//     operator = "divide"
// })

// function calculate () {

// if (operator === add) {

// function addValues(value1, value2) {
//     value1 = parseFloat(value1)
//     value2 = parseFloat(value2)
//     let result = (value1 + value2)
//     console.log(result)
// }



// console.log(addValues(1,2))





// console.log(value1)

// oneBtn.addEventListener("click", function () { 
//     if (value1 === "") {
//         value1 = 1
//     } else if (value1 !== "") {
//         value2 = 1
//     }
//     displayValue("1")})

//create global variables so value1 + valaue2 are global
//
//if nutton is +, operation youre truing to do is a sum


// subtractBtn.addEventListener("click", function () {
//     value1 = parseFloat(currentDisplay)
//     if (value1 > 0) {
//         currentDisplay = document.querySelector(".display").innerText = ""
//         subtractBtn.addEventListener("click", function () {
//         value2 = parseFloat(currentDisplay)
//         result = (value1 - value2)
//         currentDisplay = document.querySelector(".display").innerText = result
//         })
//     }
// })


//     addBtn.addEventListener("click", function () {
//         //store in value 2
//         value2 = currentDisplay
//         equalsBtn.addEventListener("click", function () {
//             result = (value1 + value2)
//             currentDisplay = document.querySelector(".display").innerText = result
//         })
//     })

//     subtractBtn.addEventListener("click", function () {
//         result = (value1 - value2)
//     })

//     multiplyBtn.addEventListener("click", function () {

//     })

//     divideBtn.addEventListener("click", function () {

//     })

//     equalsBtn.addEventListener("click", function () {

//     })







