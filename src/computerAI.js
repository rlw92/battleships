import { chooseCrdnts } from "./chooseCoordinates";
import { player2coord,startGame } from "./index"
import { overLap } from "./overLap";
import { shipfactory } from "./ships";


/* 
The computer AI needs to be able to randomly select its' ship positions.
Randomly select its' hit points.

random number between one and ten
Math.floor((Math.random() * 10) + 1);

A more advanced AI would then be able to hit adjacent grids when it detects a hit.
*/


//We need the computer to generate its coordinates randomly then start the game 

const computerAI = (() =>{



function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//work closely with ships.js to craft this
function selectCarrier(){
    //letter needs to be modified to churn out letter between a and j
    let randomNo = randomIntFromInterval(65,74);
    let letter = String.fromCharCode(randomNo);
    let number = Math.floor((Math.random() * 10) + 1);
    let dir = randomIntFromInterval(1,2);
    let direction = "V"
    if(dir===1){direction="V"}else{direction="H"}
    let PC = player2coord;
    let gunn = new shipfactory("Carrier",chooseCrdnts(letter,number,2,direction))
    if(overLap(PC,chooseCrdnts(letter,number,2,direction))==="Y"){computerAI.selectCarrier()}
  else{ 
    PC.push(gunn);
    //testing first
    computerAI.selectBattleship();
    
}
}


function selectBattleship(){
  //letter needs to be modified to churn out letter between a and j
  let randomNo = randomIntFromInterval(65,74);
  let letter = String.fromCharCode(randomNo);
  let number = Math.floor((Math.random() * 10) + 1);
  let dir = randomIntFromInterval(1,2);
  let direction = "V"
  if(dir===1){direction="V"}else{direction="H"}
  let PC = player2coord;
  let gunn = new shipfactory("Battleship",chooseCrdnts(letter,number,3,direction))
  if(overLap(PC,chooseCrdnts(letter,number,3,direction))==="Y"){computerAI.selectBattleship()}
else{ 
  PC.push(gunn);
  //testing first
  computerAI.selectCruiser();
  
  
}
}


function selectCruiser(){
  //letter needs to be modified to churn out letter between a and j
  let randomNo = randomIntFromInterval(65,74);
  let letter = String.fromCharCode(randomNo);
  let number = Math.floor((Math.random() * 10) + 1);
  let dir = randomIntFromInterval(1,2);
  let direction = "V"
  if(dir===1){direction="V"}else{direction="H"}
  let PC = player2coord;
  let gunn = new shipfactory("Cruiser",chooseCrdnts(letter,number,4,direction))
  if(overLap(PC,chooseCrdnts(letter,number,4,direction))==="Y"){computerAI.selectCruiser()}
else{ 
  PC.push(gunn);
  //testing first
  computerAI.selectSubmarine();
  
}
}


function selectSubmarine(){
  //letter needs to be modified to churn out letter between a and j
  let randomNo = randomIntFromInterval(65,74);
  let letter = String.fromCharCode(randomNo);
  let number = Math.floor((Math.random() * 10) + 1);
  let dir = randomIntFromInterval(1,2);
  let direction = "V"
  if(dir===1){direction="V"}else{direction="H"}
  let PC = player2coord;
  let gunn = new shipfactory("Submarine",chooseCrdnts(letter,number,5,direction))
  if(overLap(PC,chooseCrdnts(letter,number,5,direction))==="Y"){computerAI.selectSubmarine()}
else{ 
  PC.push(gunn);
  //testing first
  computerAI.selectDestroyer();
  
  
}
}


function selectDestroyer(){
  //letter needs to be modified to churn out letter between a and j
  let randomNo = randomIntFromInterval(65,74);
  let letter = String.fromCharCode(randomNo);
  let number = Math.floor((Math.random() * 10) + 1);
  let dir = randomIntFromInterval(1,2);
  let direction = "V"
  if(dir===1){direction="V"}else{direction="H"}
  let PC = player2coord;
  let gunn = new shipfactory("Destroyer",chooseCrdnts(letter,number,6,direction))
  if(overLap(PC,chooseCrdnts(letter,number,6,direction))==="Y"){computerAI.selectDestroyer()}
else{ 
  PC.push(gunn);
  //testing first
  startGame();  
  
}
}
return {selectCarrier,selectBattleship,selectCruiser,selectSubmarine,selectDestroyer,randomIntFromInterval}
})();


export {computerAI}