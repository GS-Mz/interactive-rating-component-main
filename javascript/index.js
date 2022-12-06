let submitBtn = document.getElementById("submit");
let stepOne = document.getElementById("choosing");
let stepTwo = document.getElementById("selected");
let value = 0;

function rating(comp){
    let id= comp.id;
    for (let i = 1; i < 6; i++) {
        document.getElementById(i).style.backgroundColor = "var(--circle-bg)";
        document.getElementById(i).style.color = "var(--LightGrey)";
    }
    document.getElementById(id).style.backgroundColor = "var(--Orange)";
    document.getElementById(id).style.color = "var(--White)";
    value = id;
    if(value > 0){
        submitBtn.addEventListener("click", ()=> {
            stepOne.style.display = "none";
            stepTwo.style.display = "flex";
            document.getElementById("resultado").innerText = value;
        })
    }   

}

