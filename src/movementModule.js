

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
    
    //a1 to b1
        const moveDown = (hit,arr) =>{
    
            let Lttr = hit.slice(0,1)
            let nnumber = hit.slice(1,3)
            let LtrNumber = Lttr.charCodeAt(0)
            let newLttrr = String.fromCharCode(++LtrNumber)
           let newHit;
    
           let i=0;
           while(i<=10){
            if(i===10){newHit=moveUp(hit,arr);
                
                break}
             else if(match((newLttrr+nnumber),arr)==="N"){
                 newLttrr = String.fromCharCode(++LtrNumber)
                 i++
                 
                 }
             else if(match((newLttrr+nnumber),arr)==="Y"){
                 newHit=newLttrr+nnumber;
                 break;
             }
    
             
    
           }
                 
           return newHit
    
    
        }
    
        //b1 to a1
        const moveUp = (hit,arr) =>{
    
            let Lttr = hit.slice(0,1)
            let nnumber = hit.slice(1,3)
            let LtrNumber = Lttr.charCodeAt(0)
           let newLttrr = String.fromCharCode(--LtrNumber)
           let newHit;
    
           let i=0;
           while(i<=10){
            if(i===10){newHit=moveFwd(hit,arr);
                
                break}
             else if(match((newLttrr+nnumber),arr)==="N"){
                 newLttrr = String.fromCharCode(--LtrNumber)
                 i++
                 }
             else if(match((newLttrr+nnumber),arr)==="Y"){newHit=newLttrr+nnumber;
                 break;
             }
    
             
    
           }
              
    
           return newHit
    
    
        }
    
        const moveFwd = (hit,arr) =>{
    
            let Lttr = hit.slice(0,1)
            let number = hit.slice(1,3)
            let nnumber = parseInt(number)
            let newNo = ++nnumber
            let newHit;
    
            let i=0;
            while(i<=10){
                
                if(i===10){newHit=moveBck(hit,arr);
                    
                 break}
              else if(match((Lttr+newNo),arr)==="N"){
                  newNo = ++nnumber
                  i++
                  }
              else if(match((Lttr+newNo),arr)==="Y"){
                  newHit=Lttr+newNo;
                  break;
              }
     
              
     
            }
               
     
            return newHit
    
    
    
        }
    
        const moveBck = (hit,arr,num) =>{
    
            let Lttr = hit.slice(0,1)
            let number = hit.slice(1,3)
            let nnumber = parseInt(number)
            let newNo = --nnumber
            let newHit;
    
            let i=0;
            while(i<=10){
                if(i===10){newHit=moveDown(hit,arr);
                    
                    break}
              else if(match((Lttr+newNo),arr)==="N"){
                  newNo = --nnumber
                  i++
                  }
              else if(match((Lttr+newNo),arr)==="Y"){newHit=Lttr+newNo;
                  break;
              }
     
              
     
            }
               
    
           return newHit
    
           
        }
    
        return {moveDown,moveUp,moveFwd,moveBck,match}
    })();
    
export { movementModule}