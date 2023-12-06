// const screen = document.querySelector("#screen");
// const allButtons = document.querySelector(".container__buttons");

// let input;
// let operation;
// let result;
// let x;
// let y;

// allButtons.addEventListener("click", (e) => {
//   if (e.target.className === "button button__number") {
//     if (screen.innerHTML === "0." || (operation && !y)) {
//       screen.innerHTML = "";
//     }
//     if (operation) {
//       screen.innerHTML += parseInt(e.target.innerHTML);
//       y = parseInt(screen.innerHTML);
//     } else {
//       screen.innerHTML += parseInt(e.target.innerHTML);
//       x = parseInt(screen.innerHTML);
//     }
//   } else if (e.target.id === "square") {
//     let squareValue = parseInt(screen.innerHTML) * parseInt(screen.innerHTML);
//     screen.innerHTML = squareValue;
//     input = screen.innerHTML;
//   } else if (e.target.id === "root") {
//     screen.innerHTML = Math.sqrt(parseInt(screen.innerHTML));
//     input = screen.innerHTML;
//   } else if (e.target.id === "clear") {
//     screen.innerHTML = "0.";
//     input = screen.innerHTML;
//     x= 0;
//     y= 0;
//   } else if (e.target.id === "add") {
//     operation = "add";
//   } else if (e.target.id === "equals") {
//     if (operation === "add") {
//       result = x + y;
//     }
//     if (operation === "subtract") {
//       result = x - y;
//     }
//     if (operation === "multiply") {
//       result = x * y;
//     }
//     if (operation === "divide") {
//       result = x / y;
//     }
//     screen.innerHTML = result;
//     x = result;
//     y = 0;
//   } else if (e.target.id === "subtract") {
//     operation = "subtract";
//   } else if (e.target.id === "multiply") {
//     operation = "multiply";
//   } else if (e.target.id === "divide") {
//     operation = "divide";
//   }
// });

// const screen = document.querySelector("#screen");
// const allButtons = document.querySelector(".container__buttons");

// let input;
// let result;
// let operation = "clear";

// const screen = document.querySelector("#screen");
// const allButtons = document.querySelector(".container__buttons");

// let input;
// let operation = "clear";
// let result;
// let x;
// let y;

// allButtons.addEventListener("click", (e) => {
//   if (e.target.className === "button button__number") {
//     if (screen.innerHTML === "0.") {
//       screen.innerHTML = "";
//     }
//     screen.innerHTML += e.target.innerHTML;
//     if (operation) {
//         y = screen.innerHTML
//     } else {
//         x = screen.innerHTML
//     }
//   } else if (e.target.id === "square") {
//   } else if (e.target.id === "root") {
//   } else if (e.target.id === "clear") {
//     screen.innerHTML = '0.'
//   } else if (e.target.id === "add") {
//     operation = "add"
//     input = screen.innerHTML;
//   } else if (e.target.id === "equals") {
//   }
// });

const screen = document.querySelector("#screen");
const allNumButtons = document.querySelectorAll(".button__number");

const squareBtn = document.querySelector("#square");
const rootBtn = document.querySelector("#root");
const clearBtn = document.querySelector("#clear");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsToBtn = document.querySelector("#equals");

// const zeroBtn = document.querySelector('#zero');
// const oneBtn = document.querySelector('#one');
// const twoBtn = document.querySelector('#two');
// const threeBtn = document.querySelector('#three');
// const fourBtn = document.querySelector('#four');
// const fiveBtn = document.querySelector('#five');
// const sixBtn = document.querySelector('#six');
// const sevenBtn = document.querySelector('#seven');
// const eightBtn = document.querySelector('#eight');
// const nineBtn = document.querySelector('#nine')
// const decimalBtn = document.querySelector('#decimal');

// oneBtn.addEventListener('click', clickNum)
// twoBtn.addEventListener('click', clickNum)
// threeBtn.addEventListener('click', clickNum)
// fourBtn.addEventListener('click', clickNum)
// fiveBtn.addEventListener('click', clickNum)
// sixBtn.addEventListener('click', clickNum)
// sevenBtn.addEventListener('click', clickNum)
// eightBtn.addEventListener('click', clickNum)
// nineBtn.addEventListener('click', clickNum)
// zeroBtn.addEventListener('click', clickNum)

// decimalBtn.addEventListener('click', clickNum)

let num1 = "";
let num2 = "";
let operation;

function clickNum(e) {
  const currValue = e.target.innerHTML;
  if (!operation) {
    num1 += currValue;
    displayVal(num1);
  } else {
    num2 += currValue;
    displayVal(num2);
  }
}

function displayVal(num) {
  screen.innerHTML = "";
  screen.innerHTML = num;
}

allNumButtons.forEach((btn) => {
  btn.addEventListener("click", clickNum);
  btn.addEventListener("keydown", clickNum);
});

clearBtn.addEventListener("click", function () {
  screen.innerHTML = "0.";
  num1 = "";
  num2 = "";
  operation = null;
});

squareBtn.addEventListener("click", function () {
  calculateResult();
  const square = parseInt(num1) * parseInt(num1);
  num1 = square;
  displayVal(square);
});

rootBtn.addEventListener("click", function () {
  calculateResult();
  const root = parseFloat(Math.sqrt(num1));
  num1 = root;
  displayVal(root);
});

addBtn.addEventListener("click", function () {
  calculateResult();
  operation = "add";
});

subtractBtn.addEventListener("click", function () {
  calculateResult();
  operation = "subtract";
});

multiplyBtn.addEventListener("click", function () {
  calculateResult();
  operation = "multiply";
});

divideBtn.addEventListener("click", function () {
  calculateResult();
  operation = "divide";
});

equalsToBtn.addEventListener("click", calculateResult);

function calculateResult() {
  if (num2) {
    let result = "";
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operation === "add") {
      result = num1 + num2;
    } else if (operation === "subtract") {
      result = num1 - num2;
    } else if (operation === "multiply") {
      result = num1 * num2;
    } else if (operation === "divide") {
      result = num1 / num2;
    }
    displayVal(result);
    num1 = result;
    num2 = "";
  }
}
