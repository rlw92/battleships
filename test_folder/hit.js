

function hit(c,t){

for(let i=0;i<t.length;i++){
    if(t[i]===c){
    t.splice(i,1)
    }
}
return t;

}

export default hit