const header = document.querySelector(".header")
const clearBtn = document.querySelector(".clear")
const gridContainer = document.querySelector(".grid-container");
let gridSize = document.createElement("h1");

const slider = document.querySelector(".slider");

let currentSize = 8;
let currentColor = "#000000"
let currentMode = "color";


const clear = document.querySelector(".clear")

function createGrid(x) {
    gridContainer.innerHTML = ""; // Clear previous grid
    let boxSize = 600 / x; // Don't subtract anything

    for (let i = 0; i < x * x; i++) {
        const grid = document.createElement("div")
        grid.classList.add("grid-box")
        grid.style.width = `${boxSize}px`
        grid.style.height = `${boxSize}px`
        gridContainer.appendChild(grid)
    }
    const grids = document.querySelectorAll(".grid-box")
    grids.forEach(grid => {
        ["mouseover", "mousedown"].forEach(event => 
            grid.addEventListener(event, () => {
                if(currentMode === "color"){
                    if (isDrawing || event === "mousedown") {
                        grid.style.backgroundColor = currentColor;
                    }
                }
                else if(currentMode === "random"){
                    if (isDrawing || event === "mousedown") {
                        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                        const r = randomBetween(0, 255);
                        const g = randomBetween(0, 255);
                        const b = randomBetween(0, 255);
                        const rgb = `rgb(${r},${g},${b})`;
                        grid.style.backgroundColor = rgb;
                    }
                }
            })
        );
    })
}


let sidebar = document.querySelector(".sidebar")
slider.addEventListener("input", () => {
    currentSize = slider.value
    createGrid(currentSize)
    sidebar.appendChild(gridSize)
    gridSize.textContent = `${currentSize} x ${currentSize}`
})

let isDrawing = false;
document.addEventListener("mousedown", () => {
    isDrawing = true;
})

document.addEventListener("mouseup", () => {
    isDrawing = false;
})

document.querySelector(".color").addEventListener("click", () => {
    document.getElementById("color-picker").click();
})



clear.addEventListener("click",() =>{
    const grids = document.querySelectorAll(".grid-box")
    grids.forEach(grid => {
        grid.style.backgroundColor = "white";
  })
})

var color = document.querySelector("#color-picker")

color.addEventListener("change",() => {
    currentColor = color.value
})



var eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click",()=>{
    if(randomize.classList.contains("selected") || colorBtn.classList.contains("selected")){
        randomize.classList.remove("selected");
        colorBtn.classList.remove("selected");
    }
    eraserBtn.classList.add("selected");
    currentColor = "white";
    currentMode = "color";
})

let colorBtn = document.querySelector(".color")
colorBtn.addEventListener("click", () => {
    if(randomize.classList.contains("selected") || eraserBtn.classList.contains("selected")){
        randomize.classList.remove("selected");
        eraserBtn.classList.remove("selected")
    }
    colorBtn.classList.add("selected")
    currentColor = color.value
    currentMode = "color";
})

let randomize = document.querySelector(".random")
randomize.addEventListener("click", ()=>{
    if(colorBtn.classList.contains("selected") || eraserBtn.classList.contains("selected") ){
        colorBtn.classList.remove("selected")
        eraserBtn.classList.remove("selected")
    }
    randomize.classList.add("selected")
    currentMode = "random";
})


sidebar.appendChild(gridSize)
gridSize.textContent = `${currentSize} x ${currentSize}`

createGrid(currentSize)



