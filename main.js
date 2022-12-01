const card = document.getElementById("card")
const number = document.querySelector("h1")
const plus = document.getElementById("increase")
const minus = document.getElementById("decrease")
let counter = 0
colorChanger()

number.textContent = counter

function colorChanger() {
  if (counter == 0) {
    card.style.backgroundColor = 'orange'
  } else if (counter > 0) {
    card.style.backgroundColor = 'green'
  } else {
    card.style.backgroundColor = 'red'
  }
}

function increasing() {
    counter = counter += 1
    colorChanger()
    number.textContent = counter
    return counter
}

function decreasing() {
    counter = counter -= 1
    colorChanger()
    number.textContent = counter
    return counter
}

function reset(x) {
  counter = 0
  colorChanger()
  number.textContent = counter
}


