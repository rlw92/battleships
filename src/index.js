import {GameboardModule} from './gameboard'
import {chooseCrdnts} from './chooseCoordinates'
import {shipfactory,carrier,battleship} from './ships'
import {domModule} from './dom'




  //coordinates of each players ship, just for testing until we use multiple ships
  
  let player1coord=[];

  
  let player2coord=[];
  document.getElementById("p2c").textContent = player2coord;
  //V=Vertical, H=Horizontal
  let direction = "V"
  //player in play
  let playerBase = ["player1","player2"];
  let pip = playerBase[0];
  document.getElementById("pip").textContent = pip;
  //the squares that need highlighting for the dom
  let sq;
  

//button to change the positioning of the placement
document.getElementById("Chnge").addEventListener('click',()=>{if(direction==="V"){direction="H";document.getElementById("position").textContent="Horizontal";}else if(direction==="H"){direction="V";document.getElementById("position").textContent="Vertical"}})


//function changes player
const chanPlayer = ()=>{
document.getElementById("p2c").textContent = player2coord;
    if(pip === playerBase[0]){pip = playerBase[1]; document.getElementById("pip").textContent = pip;}
    else if(pip === playerBase[1]){pip = playerBase[0];document.getElementById("pip").textContent = pip;}
    else{pip = playerBase[0];document.getElementById("pip").textContent = pip;}

}






//hit function for the main game loop
//in future will mark thee square as hit not allowing the player to hit again
//takes the coordinates out of the players array
function hit(t){
    let PC = player1coord;
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
    

//basically a factory function for a 2 square ship
/*commented out to test cross webpack
function bttlship1(t){
    
t.target.style.backgroundColor = "red";
let letter = t.target.dataset.letter;
let number = t.target.dataset.number;
//alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,2,direction))
let gunn = new shipfactory("Gunner",chooseCrdnts(letter,number,2,direction))
player1coord.push(gunn);
document.getElementById("p1c").textContent = player1coord;
chanPlayer();
document.getElementById("p1c").textContent = player1coord[0].name +"-"+ player1coord[0].coordinates;
return player1coord;
}*/

//to be able to invoke both functions and to remove it
//need to get rid of this and call it all in the listener





function pb2(){
    let cells = document.querySelectorAll(".cell")

for(let i=0;i<cells.length;i++){
    sq=2;
    cells[i].removeEventListener('click',carrier) 
    cells[i].removeEventListener('click',pb2)
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
    cells[i].removeEventListener('mouseover',domModule.hover)
    cells[i].removeEventListener('mouseleave',domModule.leave)
}
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


const selectionModule = (() =>{

        
    //adds an event listener to every grid cell allowing us to choose our coordinates,map them to the array then change player
    function p1carrierShip(){
       
        GameboardModule.createGameboard();
        let cells = document.querySelectorAll(".cell")
        //sq is controlling the highlighting number
        sq=2;
        for(let i=0;i<cells.length;i++){
            cells[i].addEventListener('click',carrier) 
            cells[i].addEventListener('click',selectionModule.p1battleShip) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
        }
    function p1battleShip(){
        
        let cells = document.querySelectorAll(".cell")
        
        //sq is controlling the highlighting number
        sq=3;
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',carrier) 
            cells[i].removeEventListener('click',selectionModule.p1battleShip) 
            cells[i].addEventListener('click',battleship) 
            cells[i].addEventListener('click',pb2) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
    }
    
        return{p1carrierShip,p1battleShip}
    
    })();






selectionModule.p1carrierShip();




export {sq,direction,pip,player1coord,player2coord,playerBase,chanPlayer}




                                    

