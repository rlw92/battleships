import { chooseCrdnts } from "./chooseCoordinates";
import { compAirecord,rNo,smartCounter,player1coord,player2coord,startGame,targetArrayy } from "./index"
import { movementModule } from "./movementModule";
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

  

  //Produces the target array that the computer will select coordinates from
  function targetArray(){
      for(let i=65;i<75;i++){
        //change back to 11 below
          for(let o=1;o<3;o++){
              targetArrayy.push(String.fromCharCode(i) + o)
          }
      }
  }
  



function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function hit(){
  console.log(smartCounter)
  console.log(compAirecord)
let CAfunc
        /*
        Below is the function that we are going to connect to the movement module
        it will loop through the record of any computer ai hits and make a hit
        anything that needs to be changed has a "TC comment"
        */


          let i=0;
       while(i<=compAirecord.length){
        if(i===compAirecord.length){
          alert("NONONONONON")
          rNo = randomIntFromInterval(0, targetArrayy.length-1)
        break}

          else if(compAirecord[i].coordinates.length>0){
            //TC  below is just a test, ideally this function will choose a smart function.
            alert(compAirecord[i].name)
            let CA = compAirecord[i];
            let CAtarget = CA.coordinates[CA.coordinates.length-1]
            CAfunc = compAirecord[i].functionCount;
            let CAsunk = compAirecord[i].sunk;


          

            alert(CAfunc)
            if(CAfunc===1 && CAsunk==="N"){let trg = movementModule.moveDown(CAtarget,targetArrayy)
              alert(trg)
              rNo=targetArrayy.indexOf(trg)}
             else if(CAfunc===2 && CAsunk==="N"){let trg = movementModule.moveUp(CAtarget,targetArrayy)
                alert(trg)
                rNo=targetArrayy.indexOf(trg)}
                else if(CAfunc===3 && CAsunk==="N"){let trg = movementModule.moveFwd(CAtarget,targetArrayy)
                  alert(trg)
                  rNo=targetArrayy.indexOf(trg)}
                  else if(CAfunc===4 && CAsunk==="N"){let trg = movementModule.moveBck(CAtarget,targetArrayy)
                    alert(trg)
                    rNo=targetArrayy.indexOf(trg)}

  
            
            
            
            break}

            else if(compAirecord[i].coordinates.length===0){i++}
         
          
       }
           
        
       // }


         let fire = targetArrayy[rNo];
         targetArrayy.splice(rNo,1)
        console.log("Random no: "+rNo)
         console.log("Length: "+targetArrayy.length)
         console.log(targetArrayy)
         
         return fire

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
return {hit,selectCarrier,selectBattleship,selectCruiser,selectSubmarine,selectDestroyer,randomIntFromInterval,targetArray}
})();


export {computerAI}