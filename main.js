const _false = document.querySelector("#false");
const _true = document.querySelector("#true");
const text = document.querySelector("h1");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

_false.addEventListener("mouseover", () => {
    _false.style.position = "absolute";
    _false.style.top = `${getRandomInt(500)}px`;
    _false.style.left = `${getRandomInt(1000)}px`;
    text.innerHTML = "Do you not love me?(";
})

_false.addEventListener("mouseout", () => {
    _false.style.position = "static";
    text.innerHTML = "Do you love me?";
})
function agree() {
    window.location.href = 'agree.html';
}
