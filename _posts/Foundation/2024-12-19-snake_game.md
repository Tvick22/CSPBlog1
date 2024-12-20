---
layout: post
title: Snake Game
description: Snake game challenge
type: issues
---

<div class="absolute w-full flex items-center justify-center">
    <div id="start-game-prompt" class="text-white font-bold text-base flashing-text">
        PRESS [SPACE] TO START THE GAME
    </div>
</div>
<div class="absolute w-full flex items-center justify-center">
    <div hidden id="game-over" class="text-red font-bold text-4xl">
        GAME OVER
    </div>
</div>
<div class="flex items-center	justify-center">
<div class="h-screen aspect-square bg-white border border-gray-200 rounded-3xl shadow">
    <header class="gradient-font text-center font-extrabold text-lg border-b-2 border-gray200">
        SNAKE GAME
    </header>
    <header class="gradient-font text-center font-extrabold text-sm border-b-2 border-gray200">
        SCORE: <span id="score">0</span>
    </header>
    <div id="snake-container" class="snake-container h-5/6 w-full border-b-2 border-gray200 grid justify-center content-center aspect-square">
    </div>
</div>
</div>

<script src="https://cdn.tailwindcss.com"></script>

<script>
const container = document.getElementById("snake-container")
const startGamePrompt = document.getElementById("start-game-prompt")
const gameOver = document.getElementById("game-over")

const rows = 15
const cols = 20
let score = 0
let dead = false

const normalBgColor1 = "bg-green-500"
const normalBgColor2 = "bg-green-400"

let bgColor1 = normalBgColor1
let bgColor2 = normalBgColor2
let gameSpeed = 100;

let apples = [];
const appleColor = "bg-red-500";

let gameOn = false

const snakeStartX = 1
const snakeStartY = 1

function getValidApplePosition(excludedPositions, maxX, maxY) {
  const allPositions = [];
  for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
      allPositions.push([i, j]);
    }
  }
  console.log(excludedPositions)

  const validPositions = allPositions.filter((pos) => {
    if (pos[0] == snake.headX && pos[1] == snake.headY) {
      console.log("pos: " + pos[0] + "," + pos[1]) //apple position
      return false;
    }
    for (let i = 0; i < excludedPositions.length; i++) {
      if (pos[0] == excludedPositions[i][0] && pos[1] == excludedPositions[i][1]) {
        console.log("pos: " + pos[0] + "," + pos[1])
        return false;
      }
    }
    return true;
  });
  if (validPositions.length === 0) {
    console.log("validPositions:")
    console.log(validPositions)
    console.log("excludedPositions:")
    console.log(excludedPositions)
    throw new Error("No valid positions available.");
  }

  return validPositions[Math.floor(Math.random()*validPositions.length)];
}

function createApple(oldHeadX, oldHeadY) {
  excludedCoordinates = [];
  excludedCoordinates.push([oldHeadX, oldHeadY]);
  for (let i = 0; i < apples.length; i++) {
    excludedCoordinates.push([apples[i][0], apples[i][1]]);
  }
  if (snake.moveHistory.length > 0 && snake.length > 1) {
    for (let part = 0; part <= snake.length-2; part++) {
      const history = [...snake.moveHistory]
      history.reverse()
      excludedCoordinates.push([history[part][0], history[part][1]]);
    }
  }
  const validPosition = getValidApplePosition(excludedCoordinates, cols, rows);
  const appleX = validPosition[0]
  const appleY = validPosition[1]
  apples.push([appleX, appleY]);
  changeColor(appleX, appleY, appleColor);
}

function initApple(x, y) {
  apples.push([x, y]);
  changeColor(x, y, appleColor);
}

function drawApples() {
  for (let i = 0; i < apples.length; i++) {
    changeColor(apples[i][0], apples[i][1], appleColor);
  }
}

const snake = {
  headX: 1,
  headY: 1,
  moveHistory: [],
  lastDirection: null,
  currentDirection: "right",
  length: 1,
  changeDirection(direction) {
    if (direction == "right" && this.currentDirection == "left") {
      return
    }
    if (direction == "left" && this.currentDirection == "right") {
      return
    }
    if (direction == "up" && this.currentDirection == "down") {
      return
    }
    if (direction == "down" && this.currentDirection == "up") {
      return
    }

    if (direction == "left" && this.lastDirection == "right") {
      return
    }
    if (direction == "right" && this.lastDirection == "left") {
      return
    }
    if (direction == "up" && this.lastDirection == "down") {
      return
    }
    if (direction == "down" && this.lastDirection == "up") {
      return
    }
    this.currentDirection = direction
  },
  move() {
    const oldHeadX = this.headX
    const oldHeadY = this.headY
    if (this.currentDirection == "right") {
      this.headX++
    }
    if (this.currentDirection == "left") {
      this.headX--
    }
    if (this.currentDirection == "up") {
      this.headY--
    }
    if (this.currentDirection == "down") {
      this.headY++
    }
    this.lastDirection = this.currentDirection

    //check for border collisions
    if (this.headX >= cols || this.headX < 0 || this.headY >= rows || this.headY < 0) {
      this.die(oldHeadX, oldHeadY)
      return
    }

    //check for self collisions
    if (this.moveHistory.length > 0 && this.length > 1) {
      for (let part = 0; part <= this.length-2; part++) {
        const history = [...this.moveHistory]
        history.reverse()
        if (history[part][0] == this.headX && history[part][1] == this.headY) {
          this.die(oldHeadX, oldHeadY)
          return
        }
      }
    }

    //check for apple collisions
    for (let i = 0; i < apples.length; i++) {
      if (this.headX == apples[i][0] && this.headY == apples[i][1]) {
        createApple(oldHeadX, oldHeadY)
        apples.splice(i, 1)
        this.length++
        addScore(10)
      }
    }

    if (this.headX != oldHeadX || this.headY != oldHeadY) {
      this.moveHistory.push([oldHeadX, oldHeadY])
    }

    this.draw(this.headX, this.headY, "bg-blue") //draw the head
  },
  draw(headX, headY, color) {
    clearBackground(bgColor1, bgColor2)
    drawApples()
    changeColor(headX, headY, color) //draw the head
    if (this.moveHistory.length > 0 && this.length > 1) {
      for (let part = 0; part <= this.length-2; part++) {
        const history = [...this.moveHistory]
        history.reverse()
        changeColor(history[part][0], history[part][1], color)
      }
    }
  },
  die(oldHeadX, oldHeadY) {
    gameOn = false
    dead = true
    console.log("Game over")
    gameOver.hidden = false
    this.draw(oldHeadX, oldHeadY, "bg-red")
    setTimeout(() => {
      gameOver.hidden = true
      resetScore()
      clearBackground(bgColor1, bgColor2)
      apples = []
      initApple(8,1)
      startGamePrompt.hidden = false
      this.headX = 1
      this.headY = 1
      this.moveHistory = []
      this.currentDirection = "right"
      this.length = 1
      initSnake(snakeStartX,snakeStartY,"bg-blue")
      dead = false
    }, 1000)
  }
}

document.addEventListener('keydown', (event) => {
  handleKeyPress(event)
})

function handleKeyPress (event) {
  if (event.keyCode == 32) {
    event.preventDefault()
  }
  if (dead) {
    return
  }
  if (event.keyCode == 32) {
    if (!gameOn) {
      gameOn = true
      startGamePrompt.hidden = true
      gameLoop()
    }
  }
  if (!gameOn) {
    return
  }
  if (event.keyCode == 68) {
    snake.changeDirection("right")
  }
  if (event.keyCode == 87) {
    snake.changeDirection("up")
  }
  if (event.keyCode == 83) {
    snake.changeDirection("down")
  }
  if (event.keyCode == 65) {
    snake.changeDirection("left")
  }
  if (event.keyCode == 69) {
    gameSpeed = 50
    setTimeout(() => {
      gameSpeed = 100
    }, 1000)
  }
}

function initSnake(x, y, color) {
  changeColor(x, y, color)
}

function changeColor(x, y, color) {
  const box = document.getElementById(x + "," + y)
  try {
    box.className = color
  } catch (error) {
    console.log("box: " + x + "," + y)
    console.log(error)
  }
}

function clearBackground (color1, color2) {
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          const box = document.getElementById(`${col},${row}`)
          box.className = "";
          if (row % 2) {
            if (col % 2 == 0) {
              box.classList.add(color1)
            } else {
              box.classList.add(color2);
            }
          } else {
            if (col % 2) {
              box.classList.add(color1)
            } else {
              box.classList.add(color2);
            }
          }
      }
  }
}

function setBackground (color1, color2) {
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          const backgroundBox = document.createElement("div")
          backgroundBox.id = `${col},${row}`
          if (row % 2) {
            if (col % 2 == 0) {
              backgroundBox.classList.add(color1)
            } else {
              backgroundBox.classList.add(color2);
            }
          } else {
            if (col % 2) {
              backgroundBox.classList.add(color1)
            } else {
              backgroundBox.classList.add(color2);
            }
          }
          container.appendChild(backgroundBox);
      }
  }
}

function addScore(points) {
  score += points
  document.getElementById("score").innerHTML = score
  if (score >= 100) {
    bgColor1 = "bg-indigo-400"
    bgColor2 = "bg-indigo-500"
  }
  if (score >= 200) {
    bgColor1 = "bg-emerald-400"
    bgColor2 = "bg-emerald-500"
  }
  if (score >= 300) {
    bgColor1 = "bg-yellow-400"
    bgColor2 = "bg-yellow-500"
  }
}

function resetScore() {
  score = 0
  document.getElementById("score").innerHTML = score
  bgColor1 = normalBgColor1
  bgColor2 = normalBgColor2
}

function gameLoop() {
  if (!gameOn) {
    return
  }
  gameOn = true
  startGamePrompt.hidden = true
  timeoutId = setTimeout(() => {
    snake.move()
    gameLoop()
  }, gameSpeed)
}

setBackground(bgColor1, bgColor2)
initSnake(snakeStartX,snakeStartY,"bg-blue")
initApple(8,1)

</script>

<style>
    .gradient-font {
        background: -webkit-linear-gradient(90deg, #166534 0%, #052e16 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .snake-container {
        grid-template-columns: repeat(20, 5vh);
        grid-template-rows: repeat(15, 5vh);
    }
    .post-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .flashing-text {
        animation: flash 1.5s infinite;
        background: -webkit-linear-gradient(90deg, #e2e8f0 0%, #f8fafc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    </style>
