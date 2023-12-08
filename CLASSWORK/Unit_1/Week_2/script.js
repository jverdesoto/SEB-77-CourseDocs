// HTML is our Content 
// CSS is our Style
// JS ADD Interactivity to our site

// DOM - Document Object Model

console.log('working')

// DOM Getters and Setters
// Some JS to bring the HTML  element into our JS
// some kind of function to Set somthing


//bringing an HTML element to our JS
const btn = document.querySelector('#add-comment')
const inputEl = document.querySelector ('input')
const ulEl = document.querySelector('ul')

//create a new Li element
//set its text to be the input value
//append it to the ul block
//clear out the input, so we can type something new


//event listener added, listening for a click
btn.addEventListener('click' , function(evt) {
    //create a new <li>
    const newCommentEl = document.createElement
    ('li')
    // access the input's text
    const commentText = inputEl.value
    // add value to text of comment
    
    newCommentEl.innerText =commentText

    // append Li to our Ul as the last child
    ulEl.append(newCommentEl)

    //reset our input bar each time function is run
    inputEl.value = " "

})

function handleClick(evt) {
    console.log(evt.target)
}
ulEl.addEventListener('click', handleClick)

//use my new buttons to overide my HTML and CSS
//make my background colors change

//get the buttons

const redBtn = document.querySelector('#red')
const blueBtn = document.querySelector('#blue')


//set the DOM manipulation
//adding event handlers

redBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = "red"
})

blueBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "blue"
})

const hideBtn = document.querySelector('#hide')
const showBtn = document.querySelector('#show')

hideBtn.addEventListener('click', function (){
    ulEl.classList.add('hidden')
})

showBtn.addEventListener ('click', function(){
    ulEl.classList.remove('hidden')

})