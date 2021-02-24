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

letsnake = []
snake[0] = {
    x: 9 * snakeBox,
    y: 10 * snakeBox

}

