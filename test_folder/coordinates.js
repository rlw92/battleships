//VorH stands for vertical or horizontal
//Strt stands for starting point
function chooseCrdnts(StrtLttrs,StrtNo,length,VorH){
    let coord = [];
    
    if(VorH==="V"){
    let over = 11-length;
    //building it so when the user selects a number it keeps it within the grid
    if(StrtNo>over){StrtNo = over}
    //if(VorH==="Vertical"){} Will be treating this testing as complete vertical positioning
    for(let i=1;i<length+1;i++){
        coord.push(StrtLttrs + StrtNo++)
    }
}

else if(VorH==="H"){
    let LtrNumber = StrtLttrs.charCodeAt(0)
    let over = 107-length;
    //building it so when the user selects a number it keeps it within the grid
    if(LtrNumber>over){LtrNumber = over}
    
    for(let i=1;i<length+1;i++){
        coord.push(String.fromCharCode(LtrNumber++) + StrtNo)
    }

}
    return coord;

}

/*function getNextChar(char) {
  return String.fromCharCode(char.charCodeAt(0) + 1);
}
document.getElementById("demo").innerHTML = getNextChar("a");
// b
document.getElementById("demo1").innerHTML = "a".charCodeAt(0)
// 97
document.getElementById("demo11").innerHTML = String.fromCharCode(97);
//a
j=106
*/
export default chooseCrdnts