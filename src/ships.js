import{pip,direction,player1coord,player2coord,playerBase} from './index'
import{chooseCrdnts} from './chooseCoordinates'



function shipfactory(name,coordinates){
    this.name = name
    this.coordinates = coordinates
    this.hitShip = ()=>{alert("You struck the " + name + " ship")}
    this.isSunk = () =>{if(coordinates.length===0){alert("You sunk the "+ name +" ship");}}
    
  }

  let coordid;


  const carrier = (t) =>{    
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Carrier",chooseCrdnts(letter,number,2,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    PC.push(gunn);
        
      let p = document.createElement("p")
      p.textContent = 'Carrier' +"-"+ chooseCrdnts(letter,number,2,direction)
      document.getElementById(coordid).appendChild(p);
    
    return PC;
    }

  const battleship = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Battleship",chooseCrdnts(letter,number,3,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    PC.push(gunn);
    

    let p = document.createElement("p")
      p.textContent = 'BattleShip' +"-"+ chooseCrdnts(letter,number,3,direction)
      document.getElementById(coordid).appendChild(p);
    
    return PC;
  }
  const cruiser = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Cruiser",chooseCrdnts(letter,number,4,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    PC.push(gunn);
    

    let p = document.createElement("p")
      p.textContent = 'Cruiser' +"-"+ chooseCrdnts(letter,number,4,direction)
      document.getElementById(coordid).appendChild(p);
    
    return PC;
  }
  const submarine = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Submarine",chooseCrdnts(letter,number,5,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    PC.push(gunn);
    

    let p = document.createElement("p")
      p.textContent = 'Submarine' +"-"+ chooseCrdnts(letter,number,5,direction)
      document.getElementById(coordid).appendChild(p);
    
    return PC;
  }
  const destroyer = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Destroyer",chooseCrdnts(letter,number,6,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord; coordid = "p1c"}
    else if(pip === playerBase[1]){PC = player2coord; coordid = "p2c"}
    PC.push(gunn);

    
    

    let p = document.createElement("p")
      p.textContent = 'Destroyer' +"-"+ chooseCrdnts(letter,number,6,direction)
      document.getElementById(coordid).appendChild(p);
    
    return PC;
  }

  export {shipfactory,carrier,battleship,cruiser,submarine,destroyer}