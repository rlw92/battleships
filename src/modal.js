import {cip,selectionModule} from './index'

const modalModule = (() =>{
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

//get the content of the paragraph
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//player select buttons
let psbtns = document.getElementById("PSbuttons");
psbtns.style.display = "none"

// When the user clicks on the button, closes the modal
btn.onclick = function() {
  modal.style.display = "None";
}



//player select buttons
let frnd = document.getElementById("frnd");
let comp =  document.getElementById("comp");
function showModule(){
    modal.style.display = "block";
    para1.textContent = "CHANGE PLACES!"
    para2.textContent = "Click button when ready."
    psbtns.style.display = "none";
    btn.style.display = "block"

 
}

function playerSelect(){
  modal.style.display = "block";
    para1.textContent = "Are you playing with a friend or against our AI?"
    btn.style.display = "none";
    document.querySelector(".close").style.display = "none"
    psbtns.style.display = "block";

    frnd.addEventListener('click',()=>{
      cip = "N"
      modal.style.display = "none";
      

    })

   comp.addEventListener('click',()=>{
      cip = "Y"
      modal.style.display = "none";
      

    })
}

return {showModule,playerSelect}
})();

export {modalModule}
