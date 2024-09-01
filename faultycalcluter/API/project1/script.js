let jokeSet=document.querySelector(".jokeSet")
let jokePunch=document.querySelector(".jokePunch")

async function jokeGet(){
    try{
        let respond=await fetch("https://official-joke-api.appspot.com/jokes/random")
        let data= await respond.json()
        jokeSet.innerHTML=data.setup
        jokePunch.innerHTML=data.punchline
    }
    catch(error){
        console.log(error)
    }
}

jokeGet()

