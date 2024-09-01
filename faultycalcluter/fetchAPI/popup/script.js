let btn=document.querySelector("#btn")
console.log(btn)
let popup=document.querySelector(".popup")
console.log(popup)
let close=document.querySelector("#close")
btn.addEventListener("click",()=>{
    if(popup.style.display=="block"){
        popup.style.display="none"
        popup.style.justifyContent="center"
    }else{
        popup.style.display="block"
    }
})
close.addEventListener("click",()=>{
    popup.style.display="none"
})