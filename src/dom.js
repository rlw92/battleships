let sq=2
//function for highlighting squares when hovering
function hover(t){t.target.style.backgroundColor="green";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
for(let i=0;i<sq;i++){
document.getElementById(letterr+(+numb+i)).style.backgroundColor = "green"}}

//function for returning square color to white after leaving
function leave(t){t.target.style.backgroundColor="white";
let numb = t.target.dataset.number;
let letterr = t.target.dataset.letter
for(let i=0;i<sq;i++){
document.getElementById(letterr+(+numb+i)).style.backgroundColor = "white"}
}


export{hover,leave}