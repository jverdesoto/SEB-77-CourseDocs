// Crete basic HTML/JavaScript calculator

// The HTML is ready for you, so is the styling

// Please all all the events and functions needed in the scripts.js file to make your calculator work with button clicks.

// If you finish before the time is up, please add key press functionality to it as well.
document.getElementById('screen').innerText = '';

function calculateExpression(expression) {
    expression = expression.replace('÷', '/').replace('x²', '**2').replace('√', '**0.5');
    return new Function('return ' + expression)();
}

document.getElementById('equals').addEventListener('click', function() {
    const screen = document.getElementById('screen').innerText;
    try {
        const result = calculateExpression(screen);
        document.getElementById('screen').innerText = result;
    } catch (error) {
        console.error('Error:', error.message);
        document.getElementById('screen').innerText = 'Error';
    }
});
 
document.addEventListener('keydown', function(event) {
    const onScreen = document.getElementById('screen');
    const key = event.key;

    // Define an array of valid keys that you want to handle
    const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', 'Backspace', 'Enter', '√'];

    // Check if the pressed key is in the array of valid keys
    if (validKeys.includes(key)) {
        onScreen.innerText += key;
    }
});

document.getElementById('clear').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText = '';
});

document.getElementById('one').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '1'; 
});

document.getElementById('two').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '2'; 
});

document.getElementById('three').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '3'; 
});

document.getElementById('four').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '4'; 
});

document.getElementById('five').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '5'; 
});

document.getElementById('six').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '6'; 
});

document.getElementById('seven').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '7'; 
});

document.getElementById('eight').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '8'; 
});

document.getElementById('nine').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '9'; 
});

document.getElementById('zero').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '0'; 
});

document.getElementById('add').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '+'; 
});

document.getElementById('subtract').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '-';
});

document.getElementById('multiply').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '*';
});

document.getElementById('divide').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '÷';
});

document.getElementById('root').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '√';
});

document.getElementById('square').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += 'x²';
}); 

document.getElementById('decimal').addEventListener('click', function(){
    const onScreen = document.getElementById('screen');
    onScreen.innerText += '.';
});