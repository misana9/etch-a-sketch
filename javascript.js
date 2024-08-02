const gridBox = document.getElementById("grid-container");
let input = 16;
let gridBoxSize=input * input;
let boxSize = (600 / input)-2;

function createGrids(gridBoxSize){
    for(let i=0;i <gridBoxSize;i++){
        const grid = document.createElement("div");
        grid.style.height = `${boxSize}px`;
        grid.style.width = `${boxSize}px`;
        grid.textContent = i;
        grid.style.flex = "0 0 auto"
        grid.style.border = "solid";
        grid.style.borderWidth = "1px"
        gridBox.appendChild(grid);
    }
}

createGrids(gridBoxSize);