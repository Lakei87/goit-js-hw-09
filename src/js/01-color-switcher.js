const ref = {
    body: document.querySelector("body"),
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
}
let timerId = null


ref.btnStop.setAttribute("disabled",'')

ref.btnStart.addEventListener("click", () => {
    changeBgColorOnBody()
    togglesTheButtonStatus()
    timerId = setInterval(changeBgColorOnBody, 1000)
})

ref.btnStop.addEventListener("click", stopChangeBgColorOnBody)


function changeBgColorOnBody() {
    ref.body.style.backgroundColor = getRandomHexColor()
}

function stopChangeBgColorOnBody() {
    clearInterval(timerId)
    togglesTheButtonStatus()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function togglesTheButtonStatus() {
    const hasBtnStartAtr = ref.btnStart.hasAttribute("disabled")
    const hasBtnStopAtr = ref.btnStop.hasAttribute("disabled")
    switch (hasBtnStartAtr) {
        case true:
            ref.btnStart.removeAttribute("disabled")
            break;
        default:
            ref.btnStart.setAttribute("disabled", '')
    }

    switch (hasBtnStopAtr) {
        case true:
            ref.btnStop.removeAttribute("disabled")
            break;
        default:
            ref.btnStop.setAttribute("disabled", '')
    }
}