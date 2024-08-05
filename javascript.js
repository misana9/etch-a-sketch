const gridBox = document.getElementById("grid-container");
const userInput = document.getElementById("item");
const button = document.getElementById("createGrid");
const resetDiv = document.getElementById("remake");
let input;

button.addEventListener("click",()=> {
    input = userInput.value;
    createGrids(input);
    userInput.value = "";
    button.style.visibility = "collapse";

    const reset = document.getElementById("reset");
    reset.style.visibility = "visible";
    reset.addEventListener("click",() =>{
        const gridReset = document.querySelectorAll(".uncoloredBox");
        gridReset.forEach((e) =>{
            e.style.backgroundColor = "grey";
        })
    })
    userInput.addEventListener("input",() =>{
        reset.style.visibility = "hidden";
        button.style.visibility = "visible";
    })
})



function createGrids(input){
let gridBoxSize = input * input;
let boxSize = (600 / input)-2;

    for(let i=0;i <gridBoxSize;i++){
        const grid = document.createElement("div");
        grid.setAttribute("class", "uncoloredBox")
        grid.style.height = `${boxSize}px`;
        grid.style.width = `${boxSize}px`;
        grid.style.flex = "0 0 auto"
        grid.style.border = "solid";
        grid.style.borderWidth = "1px"
        gridBox.appendChild(grid);

        const coloring = document.querySelectorAll(".uncoloredBox");
        coloring.forEach(function(grid){
            grid.addEventListener("mouseover",() =>{
                grid.style.backgroundColor = "white";
                })
        })

        resetDiv.addEventListener("click",() => {
            gridBox.removeChild(grid);
            button.style.visibility = "visible";
            reset.style.visibility = "hidden";
        })
    }
}





