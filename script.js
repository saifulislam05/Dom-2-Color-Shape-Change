const COLORS = [
    "red",
    "green",
    "cyan",
    "black",
    "voilet",
    "aqua",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
];

let changeColorBtn = document.getElementById("change-color");
let changeShapeBtn = document.getElementById("change-shape");
let box = document.getElementById("box");
let innerBox = document.getElementById("inner-box");

// Click Events on btns
changeColorBtn.addEventListener('click', colorChange);
// changeShapeBtn.addEventListener('click', shapeChange);

// Event functions
function colorChange() {
    let randomColorIndex = Math.floor(Math.random() * COLORS.length - 1);
    console.log(randomColorIndex);
    box.style.backgroundColor = COLORS[randomColorIndex];
}