let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor="red"
boxes[1].style.backgroundColor="#0f0"
document.getElementById("box3").style.backgroundColor="#00f"
document.querySelector(".box").style.backgroundColor="#f00"
//document.querySelectorAll(".box")[1].style.backgroundColor="#ff0"
document.querySelectorAll(".box2").forEach(e =>{
    e.style.backgroundColor="purple"
})
document.getElementsByTagName('h1').style.backgroundColor="#f00"