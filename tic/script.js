function handling(e){
    console.log(e.id);
    e.innerHTML = "X";
    e.style.color = "red";
    e.style.fontSize = "50px";
    e.style.textAlign = "center";
    console.log("you clicked on " + e.id);
}