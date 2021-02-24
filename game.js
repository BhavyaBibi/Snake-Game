const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const canvasSize = 600;
canvas.Width = canvasSize;
canvas.height = canvasSize;

const snakeBox = 20;
const totalMoves = canvasSize / snakeBox;

const apple = new Image();
apple.src = "images/apple.png";
