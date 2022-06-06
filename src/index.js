import {GameboardModule} from './gameboard'
import {carrier,battleship,cruiser,submarine,destroyer} from './ships'
import {domModule} from './dom'



  //coordinates of each players ship, just for testing until we use multiple ships
  let player1coord=[];
  let player2coord=[];
  let player1SunkShips=0;
  let player2SunkShips=0;
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
    if(pip === playerBase[0]){pip = playerBase[1]; document.getElementById("pip").textContent = pip;}
    else if(pip === playerBase[1]){pip = playerBase[0];document.getElementById("pip").textContent = pip;}
    else{pip = playerBase[0];document.getElementById("pip").textContent = pip;}

}


//hit function for the main game loop
//in future will mark thee square as hit not allowing the player to hit again
//takes the coordinates out of the players array

function hit(t){console.log(t.target.dataset.letter);
    let PC = player1coord;
    let SS = player1SunkShips;
    let L = t.target.dataset.letter;
    let N = t.target.dataset.number;
    let hitCoord = L+N;
    console.log(hitCoord);
    console.log(PC.length);
    
    
    
    if(pip === playerBase[0]){PC = player2coord;}
    else if(pip === playerBase[1]){PC = player1coord;}
    for(let p=0;p<PC.length;p++){
        for(let i=0;i<PC[p].coordinates.length;i++){
        if(PC[p].coordinates[i]===hitCoord){
            console.log(PC[p].coordinates)
            PC[p].coordinates.splice(i,1)
        PC[p].hitShip();
        PC[p].isSunk();        
        gameOver();
        console.log(PC[p].coordinates)
        console.log("Player one sunk ships: "+ player1SunkShips)  
        console.log("Player two sunk ships: "+ player2SunkShips)  
        
        }}
    }
    chanPlayer();}


 function gameOver(){
    console.log("UNDER CONSTRUCTIOn")
    let count =0;
    let PC = player1coord;
    let plr;
    if(pip === playerBase[0]){PC = player2coord; plr="Player One"}
    else if(pip === playerBase[1]){PC = player1coord; plr="Player Two"}
    for(let i =0;i<PC.length;i++){
       if(PC[i].coordinates.length===0){++count}
    }
    console.log(count);
    if(count===5){alert( plr+ " has won!")}
    }
    

function startGame(){
    sq=1
    chanPlayer();
    let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){
    cells[i].removeEventListener('click',destroyer) 
cells[i].removeEventListener('click',startGame)
cells[i].style.backgroundColor = "white";
}
playGame();}
    
    
function playGame(){
    
    let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){

cells[i].addEventListener('click',hit)
cells[i].style.backgroundColor = "white";
cells[i].addEventListener('mouseover',(t)=>{t.target.style.backgroundColor="red"})
cells[i].addEventListener('mouseleave',(t)=>{t.target.style.backgroundColor="white"})
}

}




//Selection module
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
            cells[i].addEventListener('click',selectionModule.p1cruiserShip) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
    }

    function p1cruiserShip(){
        
        let cells = document.querySelectorAll(".cell")
        
        //sq is controlling the highlighting number
        sq=4;
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',battleship) 
            cells[i].removeEventListener('click',selectionModule.p1cruiserShip) 
            cells[i].addEventListener('click',cruiser) 
            cells[i].addEventListener('click',selectionModule.p1submarineShip) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
    }

    function p1submarineShip(){
        
        let cells = document.querySelectorAll(".cell")
        
        //sq is controlling the highlighting number
        sq=5;
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',cruiser) 
            cells[i].removeEventListener('click',selectionModule.p1submarineShip) 
            cells[i].addEventListener('click',submarine) 
            cells[i].addEventListener('click',selectionModule.p1destroyerShip) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
    }

    function p1destroyerShip(){
        
        let cells = document.querySelectorAll(".cell")
        
        //sq is controlling the highlighting number
        sq=6;
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',submarine) 
            cells[i].removeEventListener('click',selectionModule.p1destroyerShip) 
            cells[i].addEventListener('click',destroyer) 
            //this decides whether the game starts after player two or the computer has selected their grids
            //if not it loops around
            if(pip === playerBase[1]){cells[i].addEventListener('click',startGame)}
       else if(pip === playerBase[0]){cells[i].addEventListener('click',selectionModule.loop) }
            
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
    }

    function loop(){

        //This function turns the selection process over to either a computer or player 2
    //just doing player 2 implemetation for now
    chanPlayer();
        let cells = document.querySelectorAll(".cell")
    
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',destroyer) 
            cells[i].removeEventListener('click',selectionModule.loop) 
            cells[i].style.backgroundColor = "white";
    }
selectionModule.p1carrierShip();
}


    
        return{p1carrierShip,p1battleShip,p1cruiserShip,p1submarineShip,p1destroyerShip,loop}
    
    })();






selectionModule.p1carrierShip();



export {sq,direction,pip,player1coord,player2coord,playerBase,chanPlayer,player1SunkShips,player2SunkShips}




                                    

