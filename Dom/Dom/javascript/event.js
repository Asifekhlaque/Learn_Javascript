let btn=document.getElementById("btn")

/*btn.addEventListener("click",()=>{
    let change=document.querySelector("h1")
    change.innerHTML="<u>Hello</u>"
    change.style.color="red"
})*/
// dblclick
/*btn.addEventListener("dblclick",()=>{
    let change=document.querySelector("h1")
    change.innerHTML="<u>Hello</u>"
    change.style.color="red"
})*/

/*btn.addEventListener("mouseover",()=>{
    let change=document.querySelector("h1")
    change.innerHTML="<u>Hello</u>"
    change.style.color="red"
})*/

/*btn.addEventListener("contextmenu",()=>{
    let change=document.querySelector("h1")
    change.innerHTML="<u>Hello</u>"
    change.style.color="red"
})*/

btn.addEventListener("keydown",(e)=>{
    // console.log(e)
    console.log(e.key)
    if(e.key==3){
        alert("Hello")
    }
})
// Bubbling is used to stop the event propagation it is could be called stopPropagation
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child is clicked")
})

document.querySelector(".chidcontaner").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("child contaner is clicked")
})

document.querySelector(".contaner").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Contaner is clicked")
})
function randomcolor(){
    let r=Math.floor(Math.random()*255)
    let g=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
// set interval it is used to repeat the code
let a=setInterval(()=>{
    document.querySelector(".contaner").style.backgroundColor=randomcolor()
},1000)
//clearTimeout(1)
// let b=setTimeout(()=>{
//     clearInterval(a)
// })