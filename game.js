const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const canvasSize = 600;
canvas.Width = canvasSize;
canvas.height = canvasSize;

const snakeBox = 20;
const totalMoves = canvasSize / snakeBox;

const apple = new Image();
apple.src = "images/apple.png";

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

//define snake
let snake = []
snake[0] = {
    x: 9 * snakeBox,
    y: 10 * snakeBox

}

//create food
let food = {};
getFood();

//score
let score = 0;

//snake direction
let dir = "";

document.addEventListener("keydown", direction)

function direction() {
    let key = Event.keyCode;
    if (key == 37 && dir != "RIGHT") {
        dir = "LEFT";
        left.play();


    }
    else if (key == 38 && dir != "DOWN") {
        dir = "UP";
        up.play();


    }
    else if (key == 39 && dir != "LEFT") {
        dir = "RIGHT";
        right.play();

    }
    else if (key == 40 && dir != "UP") {
        dir = "DOWN";
        down.play();
    }
}

//take food

function getFood() {
    food = {
        x: Math.floor(Math.random() * (totalMoves - 2 - 3) + 3 * snakeBox),
        y: Math.floor(Math.random() * (totalMoves - 2 - 3) + 3 * snakeBox),

    };
}

//for display

function render() {
    ctx.fillStyle = "#dcdcdc";
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    for (let i = 0; i < snake.length; ++i) {
        ctx.fillStyle = i == 0 ? "#4CAF50" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, snakeBox, snakeBox);
        ctx.strokeStyle = "#E91E63";
        ctx.strokeRect(snake[i].x, snake[i].y, snakeBox, snakeBox)
    }
    ctx.drawImage(apple, food.x, food.y, snakeBox, snakeBox);
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if (dir == "LEFT") snakeX -= snakeBox;
    if (dir == "RIGHT") snakeX += snakeBox;
    if (dir == "UP") snakeX -= snakeBox;
    if (dir == "DOWN") snakeX += snakeBox;

    //if snake eats food
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        eat.play();
        getFood();
    }

}



render();