// Async Await in javascript
// Async is used to make a function return a promise
// Await is used to wait for the promise to resolve
// Async Await is used to make a function return a promise
let s=document.querySelector(".s")
let p=document.querySelector(".p")
let d=document.querySelector(".d")
let pr=document.querySelector(".pr")
let t=document.querySelector(".t")
let api=document.querySelector(".api")
async function ap1(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let y=await x.text()
    api.innerHTML=y
}
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done"),5000)
    })
}
async function processData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Processed"),5000)
    })
}
async function showData(){
    s.innerHTML="Start"
    await ap1()
    p.innerHTML=await processData()
    pr.innerHTML="Get Data"
    d.innerHTML=await getData()
    t.innerHTML="End"
}
showData()
// Fetch API in javascript
// GET,POST,PUT,DELETE
// Get Request in javascript means it will send a request to the server without data and it will get an existing resource on the server
// Post Request in javascript means it will send a request to the server with data and it will create a new resource on the server and safe data on the server
// Put Request in javascript means it will send a request to the server with data and it will update an existing resource on the server
// Delete Request in javascript means it will send a request to the server without data and it will delete an existing resource on the server