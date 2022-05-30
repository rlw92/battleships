
function playGame(){
    let cells= document.querySelectorAll(".cell");
cells[i].removeEventListener('mouseover',(t)=>{t.target.style.backgroundColor="green";
                                                let numb = t.target.dataset.number;
                                                let letterr = t.target.dataset.letter
                                                document.getElementById(letterr+(+numb+1)).style.backgroundColor = "green"
                                            })
cells[i].removeEventListener('mouseleave',(t)=>{t.target.style.backgroundColor="white";
                                            let numb = t.target.dataset.number;
                                            let letterr = t.target.dataset.letter
                                            document.getElementById(letterr+(+numb+1)).style.backgroundColor = "white"
                                        })
cells[i].addEventListener('click',hit)
cells[i].removeEventListener('mouseover',(t)=>{t.target.style.backgroundColor="green";}
cells[i].removeEventListener('mouseleave',(t)=>{t.target.style.backgroundColor="white";}
                                    }