import{pip,direction,player1coord,player2coord,playerBase,chanPlayer} from './index'
import{chooseCrdnts} from './chooseCoordinates'


function shipfactory(name,coordinates){
    this.name = name
    this.coordinates = coordinates
    
  }


  const carrier = (t) =>{    
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Carrier",chooseCrdnts(letter,number,2,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord;}
    else if(pip === playerBase[1]){PC = player2coord;}
    PC.push(gunn);
    document.getElementById("p1c").textContent = PC
    chanPlayer();
    document.getElementById("p1c").textContent = PC[0].name +"-"+ PC[0].coordinates;
    return PC;
    }

  const battleship = (t) =>{
    t.target.style.backgroundColor = "red";
    let letter = t.target.dataset.letter;
    let number = t.target.dataset.number;
    //alert("Your battleship will have the coordinates: "+chooseCrdnts(letter,number,??,direction))
    let gunn = new shipfactory("Battleship",chooseCrdnts(letter,number,3,direction))
    let PC;
    if(pip === playerBase[0]){PC = player1coord;}
    else if(pip === playerBase[1]){PC = player2coord;}
    PC.push(gunn);
    chanPlayer();
    document.getElementById("p1c").textContent = PC[0].name +"-"+ PC[0].coordinates;
    return PC;
  }
  const cruiser = () =>{}
  const submarine = () =>{}
  const destroyer = () =>{}

  export {shipfactory,carrier}