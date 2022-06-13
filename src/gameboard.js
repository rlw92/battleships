const GameboardModule = (() => {

    let bord = "solid black 2px";
    let nobord = "none";
    
    
    const createGrids = (ltr,no,id) =>{
    let grid = document.createElement("div")
    grid.style.padding = "10px";
    //trying to take out the bordering of the not in play cells
    if(id=== 0){grid.style.border=nobord}
    else if(no===0){grid.style.border = nobord;}
    else{grid.style.border = bord;}
    
    
    grid.textContent = id;
    grid.style.textAlign = "center";
    if(id===0 && ltr==="0"){grid.textContent = no}
    else if(no===0 && ltr!="0"){grid.textContent = ltr}
    grid.dataset.hit = "No"
    grid.dataset.P1hit="N"
    grid.dataset.P2hit="N"
    let letter = grid.dataset.letter = ltr;
    let number = grid.dataset.number = no;
    //shows which player owns the cell//
    //let player = grid.dataset.playercell = "player"+plyr;
    
    //creating a class for each grid so we can access it from the functions
    grid.classList.add("cell");
    //creating an id that matches its coordinates
    grid.setAttribute('id',grid.dataset.letter+grid.dataset.number)
    
         
    let gameboard =  document.getElementById("gameboard1");
    
    gameboard.appendChild(grid);
    
    }
    
    //create the whole grid with below function
    const createGameboard = () =>{
    
    for(let i=0;i<11;i++){
        
    
        GameboardModule.createGrids("0",0,i)
        GameboardModule.createGrids("A",i);
        GameboardModule.createGrids("B",i);
        GameboardModule.createGrids("C",i);
        GameboardModule.createGrids("D",i);
        GameboardModule.createGrids("E",i);
        GameboardModule.createGrids("F",i);
        GameboardModule.createGrids("G",i);
        GameboardModule.createGrids("H",i);
        GameboardModule.createGrids("I",i);
        GameboardModule.createGrids("J",i);
    
    }
    }
    return {createGrids,createGameboard}
    })();

    export{GameboardModule};