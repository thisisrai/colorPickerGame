let amountOfSquares = 6
let colors = generateRandomColors(amountOfSquares)

let squares = document.querySelectorAll(".square")
let pickedColor = pickColor(amountOfSquares)
let colorDisplay = document.getElementById("colorDisplay")
let message = document.querySelector("#message")
let resetButton = document.getElementById("reset")
let easyBtn = document.getElementById("easyBtn")
let hardBtn = document.getElementById("hardBtn")
let easymode = false

easyBtn.addEventListener("click", function() {
  if(!easymode) {
    easyBtn.classList.toggle("selected")
    hardBtn.classList.toggle("selected")
  }
  easymode = true
  amountOfSquares = 3; 
  message.textContent = ""
  colors = generateRandomColors(amountOfSquares)
    for (let i = 3; i < 6; i++) {
      squares[i].style.backgroundColor = "#232323"
    }
  pickedColor = pickColor(amountOfSquares)
  colorDisplay.textContent = pickedColor

  document.querySelector("h1").style.backgroundColor = "steelblue"

  start(amountOfSquares)

})

hardBtn.addEventListener("click", function() {
  if(easymode) {
    hardBtn.classList.toggle("selected")
    easyBtn.classList.toggle("selected")
  }
  easymode = false
  amountOfSquares = 6; 
  message.textContent = ""
  resetButton.textContent = "New Colors"
  colors = generateRandomColors(6)

  pickedColor = pickColor(amountOfSquares)

  colorDisplay.textContent = pickedColor

  document.querySelector("h1").style.backgroundColor = "steelblue"

  start(amountOfSquares)
})

resetButton.addEventListener("click", function() {

  message.textContent = ""
  resetButton.textContent = "New Colors"
  colors = generateRandomColors(6)

  pickedColor = pickColor(amountOfSquares)

  colorDisplay.textContent = pickedColor

  document.querySelector("h1").style.backgroundColor = "steelblue"

  start(amountOfSquares)
})

colorDisplay.textContent = pickedColor

start(amountOfSquares)

function start(amountOfSquares) {
  for (let i = 0; i < amountOfSquares; i++) {
    // add colors to each square
    squares[i].style.backgroundColor = colors[i]

    //add event listeners to each square
    squares[i].addEventListener("click", function() {
      let clickedColor = this.style.backgroundColor

      if(clickedColor === pickedColor) {
        document.querySelector("h1").style.backgroundColor = pickedColor
        message.textContent = "Correct!"
        colorChanger(pickedColor, amountOfSquares)
        resetButton.textContent = "Play Again?"
      } else {
        message.textContent = "Try Again!"
        this.style.backgroundColor = "#232323"
      }
    })
  }
}


function colorChanger(color, amountOfSquares) {
  if (!easymode) {
    amountOfSquares = 6
  } else {
    amountOfSquares = 3
  }
  for(let i = 0; i < amountOfSquares; i ++) {
    squares[i].style.backgroundColor = color
  }
}

function pickColor(amountOfSquares) {
  let random = Math.floor(Math.random() * amountOfSquares)
  return colors[random]
}

function generateRandomColors(arraySize) {
  let pickingColor = () => {
    return Math.floor(Math.random() * 256 )
  }
  let array = []
  for (var i = 0; i < arraySize; i++) {
    array.push(`rgb(${pickingColor()}, ${pickingColor()}, ${pickingColor()})`)
  }
  return array
}