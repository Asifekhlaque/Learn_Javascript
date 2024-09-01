// JavaScript asynchronous because it is non-blocking code and it does not wait for the asynchronous operation to complete before moving on to the next line of code.
//e.g
/*console.log("Hello World Start")
console.log("Hello World 2")
setTimeout(() => {
    console.log("Hello World 3")
}, 1000)
console.log("Hello World 4")
setTimeout(() => {
    console.log("Hello World 5")
}, 3000)
console.log("World End")*/

/*const callback = (a,b) => {
    console.log(a+b)
}

console.log(callback(10,20))*/
/*const fu = () => {
    console.log("script loaded5")
}

const callback = (arg, fun) => {
    console.log(arg)
    console.log("script loaded2")
    fu()
}
const loadfunction = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("script loaded")
    document.head.append(sc)
}
loadfunction("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)*/

// Callback function is a function passed as an argument to another function
// Callback hell is a common problem in JavaScript
// e.g of callback hell
function getArticlesData(count) {
    // Make an asynchronous call to fetch articles data
    // Return a promise that resolves with the data
    return new Promise(function (resolve, reject) {
        // ...
    });
}

function getUserData(username) {
    // Make an asynchronous call to fetch user data
    // Return a promise that resolves with the data
    return new Promise(function (resolve, reject) {
        // ...
    });
}

function getAddress(name) {
    // Make an asynchronous call to fetch address data
    // Return a promise that resolves with the data
    return new Promise(function (resolve, reject) {
        // ...
    });
}

// Get articles data
getArticlesData(20)
    .then(function (articles) {
        // Get user data for the first article
        return getUserData(articles[0].username);
    })
    .then(function (user) {
        // Get address data for the user
        return getAddress(user.name);
    })
    .then(function (address) {
        // Do something with the address data
    })
    .catch(function (error) {
        // Handle the error
    });
