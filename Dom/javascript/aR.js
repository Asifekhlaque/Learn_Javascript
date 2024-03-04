document.querySelector(".box").innerText="Hello"
//document.designMode="on"
let div=document.createElement("div")
div.innerHTML="Hello"
div.style.color="Red"
div.setAttribute("class","JsDiv");// Add class in div
document.querySelector(".contaner").append(div)// Add div in contaner

let div1=document.querySelector(".contaner")
div1.insertAdjacentHTML("beforebegin","<div class='JsDiv1' style='color:green;'>Hello</div>")

let div2=document.createElement("div")
div2.innerHTML="Hello"
div2.style.color="orange"
div2.setAttribute("class","JsDiv2");// Add class in div
document.querySelector(".contaner").before(div2)// Add div in contaner

let cons=document.querySelector(".contaner")
cons.insertAdjacentText("beforeend","JavaScript")
cons.insertAdjacentElement("beforeend",div2)
cons.insertAdjacentHTML("afterend","<b style='color:blue; font-size: 30px; font-weight: bold; font-family: cursive;'>Hello Js</b>")// append is not working

// Remove the element
document.querySelector(".JsDiv").remove()
document.querySelector(".JsDiv1").remove()
document.querySelector(".JsDiv2").remove()