let submitBtn = document.getElementById("submit");
let stepOne = document.getElementById("choosing");
let stepTwo = document.getElementById("selected");
let value = 0;

function rating(comp){
    let id= comp.id;
    value = id;
    document.getElementById(id).style.backgroundColor = "hsl(25, 97%, 53%)";
    
}

if(value > 0){
    submitBtn.addEventListener("click", ()=> {
        stepOne.style.display = "none";
        stepTwo.style.display = "flex";
    })
}
