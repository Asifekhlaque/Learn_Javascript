// Promise is an object that represents the eventual completion or failure of an asynchronous operation
// Promise is an object that is used to handle asynchronous operations
// Promise is an object that is used to handle asynchronous operations
/*const promise = new Promise(function (resolve, reject) {
    // Performing asynchronous operations
    // ...
    if (condition) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

promise
    .then(function (result) {
        // Handle the success
        console.log(result);
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    })
    .finally(function () {
        // Always executed
    })
*/
/*let prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },1000)
})
prom1.then((result)=>{ //Promise 1 resolved and called
    console.log(result)
})*/
// promise in simple word is an object that represents the eventual completion or failure of an asynchronous operation
function w(){
    console.log("w")
}
let a="10"
let prom2=new Promise((r,rej)=>{
    if(a===10){
        rej("Promise 2 resolved with success")
    }
    else{
        r("Promise 2 resolved with failure")
    }
})
/*prom2.then((resu)=>{
    console.log(resu)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Finally")
})*/
// prom2.then((resu)=>{
//     console.log(resu)
// }).then(w(f)=>{
//     alert(w)
// })