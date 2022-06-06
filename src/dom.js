import {sq,direction,player1coord,player2coord} from './index'
const domModule = (() =>{
//function for highlighting squares when hovering
function hover(t){t.target.style.backgroundColor="green";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
if(direction==="V"){
for(let i=0;i<sq;i++){
document.getElementById(letterr+(+numb+i)).style.backgroundColor = "green"}}
else if(direction==="H"){
    let LtrNumber =letterr.charCodeAt(0)
    for(let i=0;i<sq;i++){
    document.getElementById(String.fromCharCode(LtrNumber++) + numb).style.backgroundColor="green"}
}
}

//function for returning square color to white after leaving
function leave(t){t.target.style.backgroundColor="white";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
if(direction==="V"){
    for(let i=0;i<sq;i++){
    document.getElementById(letterr+(+numb+i)).style.backgroundColor = "white"}}
    else if(direction==="H"){
        let LtrNumber =letterr.charCodeAt(0)
        for(let i=0;i<sq;i++){
        document.getElementById(String.fromCharCode(LtrNumber++) + numb).style.backgroundColor="white"}
    }
    }

    //purely for building purposes
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