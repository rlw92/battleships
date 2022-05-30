

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
//creating an id that matches its coordinates
grid.setAttribute('id',grid.dataset.letter+grid.dataset.number)

//grid.addEventListener("mouseover",()=>{grid.style.backgroundColor = "black";})
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

function chooseCrdnts(StrtLttrs,StrtNo,length,VorH){
    let coord = [];
    
    if(VorH==="V"){
    let over = 11-length;
    //building it so when the user selects a number it keeps it within the grid
    if(StrtNo>over){StrtNo = over}
    //if(VorH==="Vertical"){} Will be treating this testing as complete vertical positioning
    for(let i=1;i<length+1;i++){
        coord.push(StrtLttrs + StrtNo++)
    }
}

else if(VorH==="H"){
    let LtrNumber = StrtLttrs.charCodeAt(0)
    let over = 107-length;
    //building it so when the user selects a number it keeps it within the grid
    if(LtrNumber>over){LtrNumber = over}
    
    for(let i=1;i<length+1;i++){
        coord.push(String.fromCharCode(LtrNumber++) + StrtNo)
    }

}
    return coord;

}
//function for highlighting squares when hovering
function hover(t){t.target.style.backgroundColor="green";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
document.getElementById(letterr+(+numb+1)).style.backgroundColor = "green"}

//function for returning square color to white after leaving
function leave(t){t.target.style.backgroundColor="white";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
document.getElementById(letterr+(+numb+1)).style.backgroundColor = "white"
}
//button to change the positioning of the placement
document.getElementById("Chnge").addEventListener('click',()=>{if(direction==="V"){direction="H";document.getElementById("position").textContent="Horizontal";}else if(direction==="H"){direction="V";document.getElementById("position").textContent="Vertical"}})
//highlight the squares that are being selected
function highlight(t){t.target.style.backgroundColor = "green";}
//coordinates of each players ship, just for testing until we use multiple ships
let player1coord=[];
document.getElementById("p1c").textContent = player1coord;
let player2coord=[];
document.getElementById("p2c").textContent = player2coord;
//V=Vertical, H=Horizontal
let direction = "V"
//player in play
let playerBase = ["player1","player2"];
let pip = playerBase[0];
document.getElementById("pip").textContent = pip;
//function changes player
const chanPlayer = ()=>{   
    if(pip === playerBase[0]){pip = playerBase[1]; document.getElementById("pip").textContent = pip;}
    else if(pip === playerBase[1]){pip = playerBase[0];document.getElementById("pip").textContent = pip;}
    else{pip = playerBase[0];document.getElementById("pip").textContent = pip;}
}

//basically a factory function for a 2 square ship
function bttlship1(t){
t.target.style.backgroundColor = "red";
let letter = t.target.dataset.letter;
let number = t.target.dataset.number;
//alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,2,direction))
player1coord.push(chooseCrdnts(letter,number,2,direction));
document.getElementById("p1c").textContent = player1coord;
chanPlayer();
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
    cells[i].addEventListener('mouseover',hover)
cells[i].addEventListener('mouseleave',leave)

     
}
}



function pb2(){
    let cells = document.querySelectorAll(".cell")

for(i=0;i<cells.length;i++){
    cells[i].removeEventListener('click',chan)

    cells[i].addEventListener('click',bttlship2)
}
}

function bttlship2(t){
    t.target.style.backgroundColor = "red";
         let letter = t.target.dataset.letter;
        let number = t.target.dataset.number;
        //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,2,direction))
         player2coord.push(chooseCrdnts(letter,number,2,direction));
         document.getElementById("p2c").textContent = player2coord;
         chanPlayer();
         rmveven();
         playGame();}

//remove event listeners
function rmveven(){
    let cells=document.querySelectorAll(".cell")
    for(i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',bttlship2)
    cells[i].removeEventListener('mouseover',hover)
    cells[i].removeEventListener('mouseleave',leave)
}
}
let PC = player1coord;
//when a player hits a grid
function hit(t){
    let L = t.target.dataset.letter;
    let N = t.target.dataset.number;
    let hitCoord = L+N;
    console.log(hitCoord);
    
    if(pip === playerBase[0]){PC = player2coord;}
    else if(pip === playerBase[1]){PC = player1coord;}
console.log(PC[0]);
for(let i=0;i<PC[0].length;i++){
    if(PC[0][i]===hitCoord){
        alert("HIT");
    PC[0].splice(i,1);
    chanPlayer();}
    else{chanPlayer()}
}
return PC}
//the main game loop
function playGame(){
    document.getElementById("p1c").textContent = player1coord;
    document.getElementById("p2c").textContent = player2coord;
    let cells= document.querySelectorAll(".cell");
    for(i=0;i<cells.length;i++){

cells[i].addEventListener('click',hit)
cells[i].style.backgroundColor = "white";
cells[i].addEventListener('mouseover',(t)=>{t.target.style.backgroundColor="red"})
cells[i].addEventListener('mouseleave',(t)=>{t.target.style.backgroundColor="white"})
}

}

pb1();




                                    

