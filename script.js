const GameboardModule = (() => {

let bord = "solid black 2px";
let nobord = "none";

const createGrids = (ltr,no,id) =>{
let grid = document.createElement("div")
grid.style.padding = "10px";
//trying to take out the bordering of the not in play cells
if(id=== 0){grid.style.border=nobord}
else if(no===0){grid.style.border = nobord;}
else{grid.style.border = bord;}

grid.setAttribute("id",ltr+ no)

grid.textContent = id;
grid.style.textAlign = "center";
if(id===0 && ltr==="0"){grid.textContent = no}
else if(no===0 && ltr!="0"){grid.textContent = ltr}
grid.dataset.hit = "No"
let grdata = grid.dataset.hit;

grid.addEventListener("mouseover",()=>{grid.style.backgroundColor = "black";})
grid.addEventListener("mouseleave",()=>{if(grdata === "No"){grid.style.backgroundColor = "white"}else{grid.style.backgroundColor = "red"};})
grid.addEventListener("click", ()=>{grdata = "hit"; grid.style.backgroundColor = "red";})
let gameboard =  document.getElementById("gameboard");
gameboard.appendChild(grid);
}

//create the whole grid with below function
const createGameboard = () =>{
for(i=0;i<11;i++){
    GameboardModule.createGrids("0",0,i)
    GameboardModule.createGrids("A",i);
    GameboardModule.createGrids("B",i);
    GameboardModule.createGrids("C",i);
    GameboardModule.createGrids("D",i);
    GameboardModule.createGrids("E",i);
    GameboardModule.createGrids("F",i);
    GameboardModule.createGrids("G",i);
    GameboardModule.createGrids("H",i);
    GameboardModule.createGrids("I",i);
    GameboardModule.createGrids("J",i);
}
}
return {createGrids,createGameboard}
})();

GameboardModule.createGameboard();
