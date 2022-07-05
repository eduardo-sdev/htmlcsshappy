const elements = document.querySelector(".elements");
const btnR = document.querySelector(".button-arrow.-right")
const btnL = document.querySelector(".button-arrow.-left")

let pixels = 0

btnR.addEventListener('click', function() {
    pixels += 100
    elements.style = `transform: translateX(${pixels}px)`
})

btnL.addEventListener('click', function() {
    pixels -= 100
    elements.style = `transform: translateX(${pixels}px)`
})

