import {sq,direction,player1coord,player2coord} from './index'
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
function leave(t){t.target.style.backgroundColor="white";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
if(direction==="V"){
    let over = 11-sq;
    //building it so when the user selects a number it keeps it within the grid
    if(numb>over){numb = over}
    for(let i=0;i<sq;i++){
    document.getElementById(letterr+(+numb+i)).style.backgroundColor = "white"}}
    else if(direction==="H"){
        let LtrNumber =letterr.charCodeAt(0)
        let over = 75-sq;
    //building it so when the user selects a number it keeps it within the grid
    if(LtrNumber>over){LtrNumber = over}
        for(let i=0;i<sq;i++){
        document.getElementById(String.fromCharCode(LtrNumber++) + numb).style.backgroundColor="white"}
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

return {hover,leave,showCoordp}
})();


export{domModule}