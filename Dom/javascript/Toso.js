let btn=document.getElementById("btn")
let input=document.getElementById("input")
btn.addEventListener("click",()=>{
    let list=document.getElementById("list")
    if(input.value==""){
        alert("Please enter a value")
        return
    }
    let li=document.createElement("li")
    li.innerHTML=input.value
    list.appendChild(li)// Add the chid element
    input.value=""
})

let btnRemove=document.getElementById("btnRemove")
btnRemove.addEventListener("click",()=>{
    let list=document.getElementById("list")
    list.innerHTML=""
})