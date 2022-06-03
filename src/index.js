import {hover, leave} from './dom';
import {GameboardModule} from './gameboard'
 




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

//button to change the positioning of the placement
document.getElementById("Chnge").addEventListener('click',()=>{if(direction==="V"){direction="H";document.getElementById("position").textContent="Horizontal";}else if(direction==="H"){direction="V";document.getElementById("position").textContent="Vertical"}})

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
const chanPlayer = ()=>{   document.getElementById("p1c").textContent = player1coord;
document.getElementById("p2c").textContent = player2coord;
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
for(let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',chan) 
    cells[i].addEventListener('mouseover',hover)
cells[i].addEventListener('mouseleave',leave)

     
}
}



function pb2(){
    let cells = document.querySelectorAll(".cell")

for(let i=0;i<cells.length;i++){
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
    for(let i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',bttlship2)
    cells[i].removeEventListener('mouseover',hover)
    cells[i].removeEventListener('mouseleave',leave)
}
}






function gameOver(){
    console.log(player1coord[0])
    if(player1coord[0].length === 0){alert("Player two wins");}
    else if(player2coord[0].length === 0){alert("Player one wins")}
}
function playGame(){
    let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){

cells[i].addEventListener('click',hit)
cells[i].style.backgroundColor = "white";
cells[i].addEventListener('mouseover',(t)=>{t.target.style.backgroundColor="red"})
cells[i].addEventListener('mouseleave',(t)=>{t.target.style.backgroundColor="white"})
}

}

let PC = player1coord;
function hit(t){
    let L = t.target.dataset.letter;
    let N = t.target.dataset.number;
    let hitCoord = L+N;
    console.log(hitCoord);
    
    if(pip === playerBase[0]){PC = player2coord;}
    else if(pip === playerBase[1]){PC = player1coord;}
for(let i=0;i<PC[0].length;i++){
    if(PC[0][i]===hitCoord){
        alert("HIT");
    PC[0].splice(i,1);
    console.log(PC[0]);
    gameOver();
    }}chanPlayer();
    return PC}


pb1();





                                    

