import {sq,direction} from './index'
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

return{hover,leave}
})();


export{domModule}