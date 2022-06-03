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





export{playGame}