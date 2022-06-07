//code for identifying when the chosen coordinates overlap 
//with coordinates that have already been assigned





function overLap(a,b){
//Plc= player coordinates    
let plc=a;
//crd is the new coordinates
let crd =b;
//variable to return
let ovrlap=0;

for(let z=0;z<crd.length;z++){
for(let p=0;p<plc.length;p++){
    for(let i=0;i<plc[p].coordinates.length;i++){
    if(plc[p].coordinates[i]===crd[z]){ovrlap++}
    
}
}
}
if(ovrlap>0){ovrlap="Y"}
    else{ovrlap="N"}
return ovrlap
}

/*

//second attempt dumbing it down
function overLap(a,b){
    //Plc= player coordinates    
    let plc=a;
    //crd is the new coordinates
    let crd =b;
    //variable to return
    let ovrlap =0;
    
    for(let p=0;p<plc.length;p++){
    for(let z=0;z<crd.length;z++){
        if(plc[p]===crd[z]){ovrlap++}
        
    }
    }
    
    if(ovrlap>0){ovrlap="Y"}
    else{ovrlap="N"}
    return ovrlap
    }
    */

export {overLap}