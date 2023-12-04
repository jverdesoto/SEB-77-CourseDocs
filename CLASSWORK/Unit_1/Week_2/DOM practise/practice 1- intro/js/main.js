const titleEl = document.getElementById('title')
titleEl.style.textAlign = 'center'

const pEl = document.querySelector('.cool')
console.log(pEl)

pEl.innerHTML = "comment for <strong>Today</strong>"

pEl.style.color = "pink"

const a = document.querySelector('a')

a.setAttribute('href', '#')

const commentEls = [...document.querySelectorAll('#comments > li')]
console.log(commentEls)

for (let el of commentEls) {
    el.style.fontSize = '30px'
}

const ul = document.querySelector('ul')

ul.addEventListener ('click', handleClick)

function handleClick(e) {
    const clickedItemID = commentEls.indexOf (e.target)
    console.dir(e)
    console.log(e)
    console.log(clickedItemID)
}
