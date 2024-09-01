//? Fetch API
//*The Fetch API in JavaScript lets you make network requests to get or send data over the internet 🌐. It's modern and promise-based, making it easy to handle responses 📬.
/* Types of HTTP requests in JavaScript:

1. `GET` - Retrieve data 📥
2. `POST` - Send data 📤
3. `PUT` - Update data 🔄
4. `DELETE` - Remove data 🗑️

These are used to interact with servers.*/
//* AJAX (Asynchronous JavaScript and XML) lets web pages update content without reloading 🌐. It sends/receives data in the background 🕶️, making sites more dynamic and interactive 🎯.
//* JSON (JavaScript Object Notation) is a lightweight data format 📦. It's easy for humans to read 📝 and machines to parse 🤖, often used to exchange data between a server and web applications 🌐.
//* AJAJ (Asynchronous JavaScript and JSON) is like AJAX but uses JSON instead of XML for data exchange 📦. It's simpler and more efficient for modern web applications 🌐🚀.
//* `json()` in JavaScript converts a response to a JSON object 📜➡️📦. It's often used with the Fetch API to handle data from servers easily 🌐.
let facts=document.querySelector("#facts")
let btn=document.querySelector("#btn")
const URL="https://catfact.ninja/fact"

const getJoke=async()=>{                                                                                                                                                                                                                    
    console.log("Getting joke....")
    const response=await fetch(URL)
    console.log(response)
    const data=await response.json()
    const display=data.fact
    facts.innerHTML=display
}
btn.addEventListener("click",getJoke)

