const gridBox = document.getElementById("grid-container");
let input = 64;
let gridBoxSize=input * input;
let boxSize = (600 / input)-2;

function createGrids(gridBoxSize){
    for(let i=0;i <gridBoxSize;i++){
        const grid = document.createElement("div");
        grid.setAttribute("id", "uncoloredBox")
        grid.style.height = `${boxSize}px`;
        grid.style.width = `${boxSize}px`;
        grid.style.flex = "0 0 auto"
        grid.style.border = "solid";
        grid.style.borderWidth = "1px"
        gridBox.appendChild(grid);
    }
}
createGrids(gridBoxSize);

const coloring = document.querySelectorAll("#uncoloredBox")
coloring.forEach(function(grid){
    grid.addEventListener("mouseover", (e) =>{
        e.currentTarget.style.backgroundColor = "white";
    })
})
