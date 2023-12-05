console.log("working")

// Select the button
const btn = document.querySelector('button');
const inputEl = document.querySelector('input')
const ulEl = document.querySelector("ul")
// Attach event listener to our button
btn.addEventListener('click', function(evt) {
    const newCommentEl = document.createElement("li")
    const commentText = inputEl.value
    newCommentEl.innerText = commentText
    ulEl.append(newCommentEl)
    inputEl.value = ""

});

function handleClick(evt) {
    console.log(evt.target)
}

ulEl.addEventListener("click", handleClick)

const hidebtn = document.querySelector("#hide")

hidebtn.addEventListener("click", function() {
    ulEl.classList.add("hidden")
})

