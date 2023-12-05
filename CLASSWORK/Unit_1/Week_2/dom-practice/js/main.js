const titleEl = document.getElementById('title')
titleEl.style.textAlign = "center"

const  pEl = document.querySelector(".cool")
console.log(pEl)
pEl.innerHTML = "Comments for <strong>Today</strong>"
// if it was innerText, <strong> doesnt work and it sees is as plain text

const linkEl = document.querySelector('a')
linkEl.setAttribute('href','https://www.google.com')

const commentEls = document.querySelectorAll('#comments > li')
console.log(commentEls)

for (let commentEl of commentEls) {
    console.log(commentEl)
}



