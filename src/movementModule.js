

const movementModule = (() => {

//if the hit matches whats in the array it returns "Y" if not: "N"s
const match = (hit,arr)=>{
    let counter = 0;
    let result;
for(let i=0;i<arr.length;i++){
    if(hit===arr[i]){counter++}
        
}
if(counter>0){result = "Y"}
else{result = "N"}
return result;
}

    const moveDown = (hit,arr) =>{

        let Lttr = hit.slice(0,1)
        let nnumber = hit.slice(1,2)
        let LtrNumber = Lttr.charCodeAt(0)
        let newLttrr = String.fromCharCode(++LtrNumber)
       

       let i=0;
       while(i<10){
         if(match((newLttrr+nnumber),arr)==="N"){
             newLttrr = String.fromCharCode(++LtrNumber)
             i++
             }
         else if(match((newLttrr+nnumber),arr)==="Y"){
             break;
         }

         

       }
          let newHit=newLttrr+nnumber;   
       return newHit


    }

    const moveUp = (hit,arr) =>{

        let Lttr = hit.slice(0,1)
        let nnumber = hit.slice(1,2)
        let LtrNumber = Lttr.charCodeAt(0)
       let newLttrr = String.fromCharCode(--LtrNumber)

       let i=0;
       while(i<10){
         if(match((newLttrr+nnumber),arr)==="N"){
             newLttrr = String.fromCharCode(--LtrNumber)
             i++
             }
         else if(match((newLttrr+nnumber),arr)==="Y"){
             break;
         }

         

       }
          let newHit=newLttrr+nnumber;

       return newHit


    }

    const moveFwd = (hit,arr) =>{

        let Lttr = hit.slice(0,1)
        let number = hit.slice(1,2)
        let nnumber = parseInt(number)
        let newNo = ++nnumber

        let i=0;
        while(i<10){
          if(match((Lttr+newNo),arr)==="N"){
              newNo = ++nnumber
              i++
              }
          else if(match((Lttr+newNo),arr)==="Y"){
              break;
          }
 
          
 
        }
           let newHit=Lttr+newNo;
 
        return newHit



    }

    const moveBck = (hit,arr) =>{

        let Lttr = hit.slice(0,1)
        let number = hit.slice(1,2)
        let nnumber = parseInt(number)
        let newNo = --nnumber

        let i=0;
        while(i<10){
          if(match((Lttr+newNo),arr)==="N"){
              newNo = --nnumber
              i++
              }
          else if(match((Lttr+newNo),arr)==="Y"){
              break;
          }
 
          
 
        }
           let newHit=Lttr+newNo;

       return newHit

       
    }

    return {moveDown,moveUp,moveFwd,moveBck,match}
})();

export { movementModule}