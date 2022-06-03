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


export{hover,leave}