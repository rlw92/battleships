import {GameboardModule} from './gameboard'
import {carrier,battleship,cruiser,submarine,destroyer} from './ships'
import {domModule} from './dom'
import {modalModule} from './modal'
import {computerAI} from './computerAI'
import {movementModule} from './movementModule'


//computer in play
let cip = "N"
  //coordinates of each players ship
  let player1coord=[];
  let player2coord=[];
  //amount of sunk ships determining whether the game is over or not
  let player1SunkShips=0;
  let player2SunkShips=0;
  //coordinates of each tile hit by each player
  let player1strikes=[]
  let player2strikes=[]
  //V=Vertical, H=Horizontal
  let direction = "V"
  //player in play
  let playerBase = ["player1","player2"];
  let pip = playerBase[0];
  let Pcrd = player1coord;
  if(pip === playerBase[0]){Pcrd = player1coord;}
  else if(pip === playerBase[1]){Pcrd = player2coord;}
  document.getElementById("pip").textContent = pip;
  //the squares that need highlighting for the dom
  let sq;
  let Phit;
  let targetArrayy = [];
  let smartCounter = 0;
  let rNo;
  //below variable for determining how many ships the player has to sunk to initiate a game over
  let gmovrCount;
  
  
  computerAI.targetArray();
  console.log(targetArrayy)
  console.log("YERT")

  let compAirecord=[
                                           //change back after testing
                    {name:"Carrier",coordinates:[],sunk:"N",functionCount:0},
                    {name:"Battleship",coordinates:[],sunk:"N",functionCount:0},
                    {name:"Cruiser",coordinates:[],sunk:"N",functionCount:0},
                    {name:"Submarine",coordinates:[],sunk:"N",functionCount:0},
                    {name:"Destroyer",coordinates:[],sunk:"N",functionCount:0}
                ];
  
  





  
  

//button to change the positioning of the placement
document.getElementById("Chnge").addEventListener('click',()=>{if(direction==="V"){direction="H";document.getElementById("position").textContent="Horizontal";}else if(direction==="H"){direction="V";document.getElementById("position").textContent="Vertical"}})
//attackboard button that shows positions where the player has attacked
document.getElementById("shwshipos").addEventListener('mouseover',()=>{domModule.whiteOut();
    domModule.playerBoard();
    })
document.getElementById("shwshipos").addEventListener('mouseleave',()=>{domModule.whiteOut();
    domModule.attackBoard();})

   console.log("HEYEE")
//function changes player
const chanPlayer = ()=>{
    let t;
if(cip==="Y"){      
        t = modalModule.compHitModal();}
        
else{t = modalModule.showModule();}
t;
    if(pip === playerBase[0]){pip = playerBase[1];
        Pcrd = player2coord;
        document.getElementById("pip").textContent = pip;}
    else if(pip === playerBase[1]){pip = playerBase[0];
        Pcrd = player1coord;
        document.getElementById("pip").textContent = pip;}
        else{pip = playerBase[0];
        Pcrd=player2coord;
        document.getElementById("pip").textContent = pip;}
        domModule.whiteOut();
        domModule.attackBoard();
        }
    
console.log("OIL")
    console.log("Nnnnn")



//below functions need to be grouped into a module
console.log("INRST")

function hit(t){console.log(t.target.dataset.letter);

    console.log(pip)
    
    let PC = player1coord;
    let strike = player1strikes;
    let L;
    let N;
    let hitCoord;
    let smartTell = 0;
    console.log(smartTell)

    if(cip==="Y"&&pip===playerBase[1]){
         hitCoord = computerAI.hit();      
        
        
    
    alert("Computer has struck Tile: "+hitCoord)
    
    }
    else{
    
    L = t.target.dataset.letter;
    N = t.target.dataset.number;
    hitCoord = L+N;}


    console.log(hitCoord);
    console.log(PC.length); 
    if(pip === playerBase[0]){PC = player2coord;strike=player1strikes;Phit=t.target.dataset.P1hit}
    else if(pip === playerBase[1] && cip!="Y"){PC = player1coord;strike=player2strikes;Phit=t.target.dataset.P2hit}
    else if(pip === playerBase[1] && cip==="Y"){PC = player1coord;strike=player2strikes;}
    if(N==="0"){console.log("Stay in the grid.")}
    else if(Phit==="Y"){console.log("Already been hit, try again.")}
    else{       
        if(pip === playerBase[0]){PC = player2coord;strike=player1strikes;Phit=t.target.dataset.P1hit="Y"}
        else if(pip === playerBase[1]){PC = player1coord;strike=player2strikes;Phit=t.target.dataset.P2hit="Y"}
    for(let p=0;p<PC.length;p++){
        for(let i=0;i<PC[p].coordinates.length;i++){
        if(PC[p].coordinates[i]===hitCoord){
            console.log(PC[p].coordinates)
            PC[p].coordinates.splice(i,1)
        PC[p].hitShip(hitCoord);
        PC[p].isSunk();  

        //ai  
        ++smartTell


        gameOver();
        
        console.log("Player one sunk ships: "+ player1SunkShips)  
        console.log("Player two sunk ships: "+ player2SunkShips)  
        
        }
        
    
    }
    }strike.push(hitCoord)    
        console.log("P1 strikes: "+ player1strikes)
        console.log("P2 strikes: "+ player2strikes)

//missed section if the smartTell hasn't increased,player has missed
if(smartTell===0){alert("MISSED")
if(cip==="Y"&&pip===playerBase[1]){
    //testing smartAI
    let i=0;
    while(i<compAirecord.length){
     if(compAirecord[i].functionCount>0){compAirecord[i].functionCount++; break}
     else{i++}


    }}}


        
    chanPlayer()

    }}
console.log("III")

 function gameOver(){
    let count =0;
    let PC = player1coord;
    let plr;
    if(pip === playerBase[0]){PC = player2coord; plr="Player One"}
    else if(pip === playerBase[1]){PC = player1coord; plr="Player Two"}
    for(let i =0;i<PC.length;i++){
       if(PC[i].coordinates.length===0){++count}
    }
    console.log(count);

    //change below count to 1 for a quick game, 5 for a full game
    //may be worth allowing players to change it before game to see what length of game they want to play
    if(count===(+gmovrCount)){alert( plr+ " has won!")}
    }
    

function startGame(){console.log(gmovrCount)
    
    if(Pcrd.length>4){
        if(cip==="Y"){
            alert("Computer is choosing battle positions")
            sq=1
            let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){
cells[i].style.backgroundColor = "white";
document.getElementById("ingamebuttons").style.display = "block";
document.getElementById("positionPara").style.display = "none";
document.getElementById("Chnge").style.display = "none";
       } playGame();
        }
        else{
    sq=1
    chanPlayer();
    let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){
    cells[i].removeEventListener('click',destroyer) 
cells[i].removeEventListener('click',startGame)
cells[i].style.backgroundColor = "white";
document.getElementById("ingamebuttons").style.display = "block";
document.getElementById("positionPara").style.display = "none";
document.getElementById("Chnge").style.display = "none";
}
playGame()}}}
    
    
function playGame(){
    
    let cells= document.querySelectorAll(".cell");
for(let i=0;i<cells.length;i++){

cells[i].addEventListener('click',hit)
cells[i].style.backgroundColor = "white";
cells[i].removeEventListener('mouseover',domModule.hover)
cells[i].removeEventListener('mouseleave',domModule.leave)
cells[i].addEventListener('mouseover',domModule.hitHover)
cells[i].addEventListener('mouseleave',domModule.hitLeave)


}
}



//Selection module
const selectionModule = (() =>{
    
    

        
    //adds an event listener to every grid cell allowing us to choose our coordinates,map them to the array then change player
    function p1carrierShip(){
       
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
        
        if(Pcrd.length>0){
        
        let cells = document.querySelectorAll(".cell")
        
        //sq is controlling the highlighting number
        sq=3;
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',carrier) 
            cells[i].removeEventListener('click',selectionModule.p1battleShip) 
            cells[i].addEventListener('click',battleship) 
            //if coordinates match length needed move onto next part
            cells[i].addEventListener('click',selectionModule.p1cruiserShip) 
            cells[i].addEventListener('mouseover',domModule.hover)
        cells[i].addEventListener('mouseleave',domModule.leave)
        }
        }
    }
    

    function p1cruiserShip(){

        if(Pcrd.length>1){
            
        
        console.log(Pcrd)
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
    }

    function p1submarineShip(){

        if(Pcrd.length>2){
        
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
    }

    function p1destroyerShip(){

        if(Pcrd.length>3){
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
    }

    function loop(){
        if(Pcrd.length>4){

            if(cip==="Y"){
                
                let cells = document.querySelectorAll(".cell")
    
        for(let i=0;i<cells.length;i++){
            cells[i].removeEventListener('click',destroyer) 
            cells[i].removeEventListener('click',selectionModule.loop) 
            cells[i].style.backgroundColor = "white";

                }
                computerAI.selectCarrier();}
            else{

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
    }}


    
        return{p1carrierShip,p1battleShip,p1cruiserShip,p1submarineShip,p1destroyerShip,loop}
    
    })();




   modalModule.playerSelect();
    GameboardModule.createGameboard();
selectionModule.p1carrierShip();

//testing hit function
//playGame();



export {gmovrCount,compAirecord,rNo,smartCounter,targetArrayy,hit,startGame,selectionModule,cip,Phit,sq,direction,pip,player1coord,player2coord,playerBase,chanPlayer,player1SunkShips,player2SunkShips,player1strikes,player2strikes}




                                    

