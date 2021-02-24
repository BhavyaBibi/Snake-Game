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
letsnake = []
snake[0] = {
    x: 9 * snakeBox,
    y: 10 * snakeBox

}

//create food
letfood = {};

//score
let score = 0;

//snake direction
let dir = "";

document.addEventListener("keydown", direction)

function direction() {
    let key = event.keyCode;
    if (key == 37) {
        dir = "LEFT";

    }
    else if (key == 38) {
        dir = "UP";

    }
    else if (key == 39) {
        dir = "RIGHT";
    }
    else if (key == 40) {
        dir = "DOWN"
    }
}




