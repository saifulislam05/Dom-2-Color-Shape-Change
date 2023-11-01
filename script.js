const COLORS = ["red","green","cyan","black","violet","aqua","blue","yellow","purple","orange","lightgreen","lemon",
];

const SHAPES = [
  "square",
  "triangle",
  "circle",
  "rectangle",
  "diamond",
];

let changeColorBtn = document.getElementById("change-color");
let changeShapeBtn = document.getElementById("change-shape");
let changeShapeColorBtn = document.getElementById("change-shape-color");
let box = document.getElementById("box");
let innerBox = document.getElementById("inner-box");

// Click Events on btns
changeColorBtn.addEventListener("click", colorChange);
changeShapeBtn.addEventListener("click", shapeChange);
changeShapeColorBtn.addEventListener("click", shapeColorChange);

function colorChange() {
  let randomIndex = Math.floor(Math.random() * COLORS.length);
  box.style.backgroundColor = COLORS[randomIndex];
}

function shapeChange() {
    let randomIndex = Math.floor(Math.random() * SHAPES.length);
    innerBox.className = "shape " + SHAPES[randomIndex];
}

function shapeColorChange() {
    let randomIndex = Math.floor(Math.random() * COLORS.length);
    innerBox.style.backgroundColor = COLORS[randomIndex];
  
}
