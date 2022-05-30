/*
The hit function has to:
#know which player is playing
#take the coordinates of the square tile that tha player has selected
#loop through every coordinates array of the opponent to see if there are matches
#if there is a match then that coordinate gets spliced from the array
#a function is run that sees if all opponenets arrays are empty if so then match is won
#if there is no hit or empty array then the match continues and the opponent is in play
 */

function hit(t){
    let L = t.target.dataset.letter;
    let N = t.target.dataset.number;
    let hitCoord = L+N;
    if(pip === playerBase[0]){let PC = player1coord;}
    else if(pip === playerBase[1]){let PC = player2coord;}

for(let i=0;i<PC.length;i++){
    if(PC[i]===hitCoord){
    PC.splice(i,1)
    }
    else{playGame();}
}
return PC;

}

export default hit