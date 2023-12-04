const bigHeader = document.getElementById('title')

let pEl = document.querySelector(".cool");
console.log(pEl);

pEl.innerHTML = "Hi - I'm actually <strong>Cool!</strong>";
pEl.style.color = "red";

const linkEl = document.querySelector("a");
linkEl.setAttribute("href", "https://www.google.com");
linkEl.setAttribute("target", "_blank");

const commentsEls = document.querySelectorAll("#comments > li");
for (let commentEl of commentsEls) {
    commentEl.style.fontSize = "30px";
}