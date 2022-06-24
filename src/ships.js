import{pip,direction,player1coord,player2coord,playerBase} from './index'
import{chooseCrdnts} from './chooseCoordinates'
import{overLap} from './overLap'



function shipfactory(name,coordinates){
    this.name = name
    this.coordinates = coordinates
    this.hitShip = ()=>{alert("Struck the " + name + " ship")}
    this.isSunk = () =>{if(coordinates.length===0){alert("Sunk the "+ name +" ship");}}
    
  }

  let coordid;


  const carrier = (t) =>{    
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Carrier",chooseCrdnts(letter,number,2,direction))
    let PC;
    if(number==="0"){console.log("Stay in the grid.")}
    else{
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
 
    PC.push(gunn);
  
      
    }
    return PC;
    }

  const battleship = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Battleship",chooseCrdnts(letter,number,3,direction))
    let PC;
    if(number==="0"){console.log("Stay in the grid.")}
    else{
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    if(overLap(PC,chooseCrdnts(letter,number,3,direction))==="Y"){alert("These tiles have already been assigned, please choose different tiles")}
  else{ 
    PC.push(gunn);
    

    
  }}
    return PC;
  }
  const cruiser = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Cruiser",chooseCrdnts(letter,number,4,direction))
    let PC;
    if(number==="0"){console.log("Stay in the grid.")}
    else{
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    if(overLap(PC,chooseCrdnts(letter,number,4,direction))==="Y"){alert("These tiles have already been assigned, please choose different tiles")}
    else{ 
    PC.push(gunn);
    

    
    }}
    return PC;
  }
  const submarine = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Submarine",chooseCrdnts(letter,number,5,direction))
    let PC;
    if(number==="0"){console.log("Stay in the grid.")}
    else{
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    if(overLap(PC,chooseCrdnts(letter,number,5,direction))==="Y"){alert("These tiles have already been assigned, please choose different tiles")}
    else{ 
    PC.push(gunn);
    
    
    }}
    return PC;
  }
  const destroyer = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Destroyer",chooseCrdnts(letter,number,6,direction))
    let PC;
    if(number==="0"){console.log("Stay in the grid.")}
    else{
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    if(overLap(PC,chooseCrdnts(letter,number,6,direction))==="Y"){alert("These tiles have already been assigned, please choose different tiles")}
    else{ 
    PC.push(gunn);

    
    }}
    return PC;
  }

  export {shipfactory,carrier,battleship,cruiser,submarine,destroyer}