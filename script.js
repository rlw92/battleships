

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


grid.textContent = id;
grid.style.textAlign = "center";
if(id===0 && ltr==="0"){grid.textContent = no}
else if(no===0 && ltr!="0"){grid.textContent = ltr}
grid.dataset.hit = "No"
let grdata = grid.dataset.hit;
let letter = grid.dataset.letter = ltr;
let number = grid.dataset.number = no;
//shows which player owns the cell//
//let player = grid.dataset.playercell = "player"+plyr;

//creating a class for each grid so we can access it from the functions
grid.classList.add("cell");

grid.addEventListener("mouseover",()=>{grid.style.backgroundColor = "black";})
grid.addEventListener("mouseleave",()=>{if(grdata === "No"){grid.style.backgroundColor = "white"}else{grid.style.backgroundColor = "red"};})
                                                                   
let gameboard =  document.getElementById("gameboard1");

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



//below needs to be sorted into modules of their own at the moment

function chooseCrdnts(StrtLttrs,StrtNo,length){
    let coord = [];
    let over = 11-length;
    //building it so when the user selects a number it keeps it within the grid
    if(StrtNo>over){StrtNo = over}
    //if(VorH==="Vertical"){} Will be treating this testing as complete vertical positioning
    for(let i=1;i<length+1;i++){
        coord.push(StrtLttrs + StrtNo++)
    }
    return coord;

}

let player1coord=[];
let player2coord=[];

//basically a factory function for a 5 square ship
function bttlship1(t){
t.target.style.backgroundColor = "red";
let letter = t.target.dataset.letter;
let number = t.target.dataset.number;
player1coord.push(chooseCrdnts(letter,number,5));
}

//to be able to invoke both functions and to remove it
function chan(t){
    bttlship1(t);
    pb2();
}

//adds an event listener to every grid cell allowing us to choose our coordinates,map them to the array then change player
function pb1(){
GameboardModule.createGameboard();
let cells = document.querySelectorAll(".cell")
for(i=0;i<cells.length;i++){
    cells[i].addEventListener('click',chan)
     
}
}

function pb2(){
    let cells = document.querySelectorAll(".cell")

for(i=0;i<cells.length;i++){
    cells[i].removeEventListener('click',chan)

    cells[i].addEventListener('click',(t)=>{
     t.target.style.backgroundColor = "red";
     let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
     player2coord.push(chooseCrdnts(letter,number,5));
     
     
})
}
}

pb1();







