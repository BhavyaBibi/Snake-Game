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




