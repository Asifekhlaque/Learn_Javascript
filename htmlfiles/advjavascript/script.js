// Javascript IIFE - Immediately Invoked Function Expression
(function () {
    console.log("Hello!");
})()

async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })
}
// IIFE
(async function main(){
    console.log(a1)
    var a1=10
    //let a1=10 //! Error in hosting
    let x=await sleep()
    let y=await sleep()
    console.log(x)
})()

// Destructuring
let arr=[1,2,3,4,5]
let [a,b,c,d,e]=arr
console.log(a,b,c,d,e)

let [x,y,...rest]=[1,2,3,4,5]
console.log(x,y,rest)

// Object Destructuring
let obj={
    k:4,
    j:8,
    l:4
}
let {k,j,l}=obj
console.log(k,j,l)

// Spread Operator
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let arr3=[...arr1,...arr2]
console.log(arr3)
// Hosting 