const ref = {
    body: document.querySelector("body"),
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
}
let timerId = null


ref.btnStart.addEventListener("click", () => {
    changeBgColorOnBody()
    ref.btnStart.setAttribute("disabled",'')
    timerId = setInterval(changeBgColorOnBody, 1000)
})

ref.btnStop.addEventListener("click", stopChangeBgColorOnBody)


function changeBgColorOnBody() {
    ref.body.style.backgroundColor = getRandomHexColor()
}

function stopChangeBgColorOnBody() {
    clearInterval(timerId)
    ref.btnStart.removeAttribute("disabled")
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}