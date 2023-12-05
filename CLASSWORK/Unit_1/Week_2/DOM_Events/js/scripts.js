acceptedCharacters = "0123456789-+=c/*."
let acceptedArray = acceptedCharacters.split("");
let screen = document.getElementById("screen");
let current = screen.textContent;
let total =0;

//numbers
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let decimal = document.getElementById("decimal")

//numbers as KeyStrokes

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (acceptedArray.includes(name) || name === "Enter" || name === "Backspace"){
        if (name === "Enter"){
            calculate(screen.innerText);
        } else if (name === "c"){
            updateScreen(true);
        } else  if (name === ".") {
            updateScreen(".");
        } else if (name === "Backspace"){
            backspace();
        } else {
        updateScreen(name);}
    }
   
  }, false);

//operations
let square = document.getElementById("square");
let root = document.getElementById("root");
let clear = document.getElementById("clear");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");




//calculation


one.addEventListener("click", function(){
    updateScreen(1);
});

two.addEventListener("click", function(){
    updateScreen(2);
});

three.addEventListener("click", function(){
    updateScreen(3);
});

four.addEventListener("click", function(){
    updateScreen(4);
});

five.addEventListener("click", function(){
    updateScreen(5);
});

six.addEventListener("click", function(){
    updateScreen(6);
});

seven.addEventListener("click", function(){
    updateScreen(7);
});

eight.addEventListener("click", function(){
    updateScreen(8);
});

nine.addEventListener("click", function(){
    updateScreen(9);
});

zero.addEventListener("click", function(){
    updateScreen(0);
});

decimal.addEventListener("click", function(){
    updateScreen(".");
});

square.addEventListener("click", function(){
    updateScreen("squareMe");
});

root.addEventListener("click", function(){
    updateScreen("rootMe");
});

add.addEventListener("click", function(){
    updateScreen("+");
});

subtract.addEventListener("click", function(){
    updateScreen("-");
});

multiply.addEventListener("click", function(){
    updateScreen("*");
});

divide.addEventListener("click", function(){
    updateScreen("/");
});

clear.addEventListener("click", function(){
    updateScreen(true);
});

equals.addEventListener("click", function(){
    calculate(screen.innerText);
});







function updateScreen(number){
    if (number === true){screen.innerText = "";}
    else if (number === "squareMe"){
    screen.innerText = `(${screen.innerText}*${screen.innerText})`
    } else if (number === "rootMe"){
        screen.innerText = `${Math.sqrt(screen.innerText)}`
    }else {
    screen.innerText = screen.innerText + number;
    }
    return screen.innerText;
}

function backspace(){
    let tryThis = screen.innerText
    let tryArray = tryThis.split("");
    tryArray.pop();

    let resultString = tryArray.join("");
    updateScreen(true);
    updateScreen(resultString);
}




function calculate (field){
   let toCalcuate = field;
   console.log(toCalcuate)
   screen.innerText = (eval(toCalcuate));
}


// alert(`the Accepted Keys for keyboard entry are: ${acceptedCharacters} and the enter key for equals`)


// function numberButton(button){
//     button.addEventListener("click", function(){
//         screen.innerText = `${button}`
//     });
    
// }
//when one of the buttons are pressed, the screen updates with their value