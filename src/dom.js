import {sq,direction,player1coord,player2coord,pip,player1strikes,player2strikes,playerBase,Phit} from './index'
const domModule = (() =>{
//function for highlighting squares when hovering
function hover(t){
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter;
let color = "blue";

if(direction==="V"){
    let over = 11-sq;
    //building it so when the user selects a number it keeps it within the grid
    if(numb>over){numb = over}
    if(numb==="0"){color = "white"}
    else{color="grey"}
for(let i=0;i<sq;i++){
document.getElementById(letterr+(+numb+i)).style.backgroundColor = color}}
else if(direction==="H"){
    let LtrNumber =letterr.charCodeAt(0)
    let over = 75-sq;
    //building it so when the user selects a number it keeps it within the grid
    if(LtrNumber>over){LtrNumber = over}
    for(let i=0;i<sq;i++){
    document.getElementById(String.fromCharCode(LtrNumber++) + numb).style.backgroundColor="grey"}
}
}

//function for returning square color to white after leaving
function leave(t){t.target.backgroundColor="white"
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter;
let hit = letterr+numb;
console.log(hit);
color="white"

if(direction==="V"){
    let over = 11-sq;
    //building it so when the user selects a number it keeps it within the grid
    if(numb>over){numb = over}
    for(let i=0;i<sq;i++){
    document.getElementById(letterr+(+numb+i)).style.backgroundColor = color}}
    else if(direction==="H"){
        let LtrNumber =letterr.charCodeAt(0)
        let over = 75-sq;
        
    //building it so when the user selects a number it keeps it within the grid
    if(LtrNumber>over){LtrNumber = over}
        for(let i=0;i<sq;i++){
        document.getElementById(String.fromCharCode(LtrNumber++) + numb).style.backgroundColor=color}
    }

    
    }

    //remember to implement this before finishing up the project
    //***
    function showCoordp(){
    for(let i=0;i<player1coord.length;i++){
        let p = document.createElement("p")
        p.textContent = player1coord[i].name +'-'+player1coord[i].coordinates;
        document.getElementById("p1c").appendChild(p);
      }

      for(let i=0;i<player2coord.length;i++){
        let p = document.createElement("p")
        p.textContent = player2coord[i].name +'-'+player2coord[i].coordinates;
        document.getElementById("p2c").appendChild(p);
      }}
   
      //function that allows us to update tiles without carrying previous tiles over
      function whiteOut(){
        let cells= document.querySelectorAll(".cell");
        for(let i=0;i<cells.length;i++){
            cells[i].style.backgroundColor = "white";}
      }
    
    function attackBoard(){
        let strike = player1strikes;
        if(pip === playerBase[0]){strike=player1strikes}
    else if(pip === playerBase[1]){strike=player2strikes}    
    for(let i=0;i<strike.length;i++){
        console.log(strike[i])
        document.getElementById(strike[i]).style.backgroundColor = "red";
    }

    }

    function playerBoard(){
        
    }

    //functions for when the hit function is in play
    function hitHover(t){
        if(t.target.dataset.number==="0")
{t.target.style.backgroundColor="white"}else{t.target.style.backgroundColor="red"}

    }

    function hitLeave(t){
        if(pip === playerBase[0]){Phit=t.target.dataset.P1hit}
    else if(pip === playerBase[1]){Phit=t.target.dataset.P2hit}  
    console.log(Phit)
        if(Phit==="Y"){t.target.style.backgroundColor="red"}
        else if(Phit==="N"){t.target.style.backgroundColor = "white"}
    }

return {hover,leave,showCoordp,attackBoard,whiteOut,hitHover,hitLeave}
})();


export{domModule}