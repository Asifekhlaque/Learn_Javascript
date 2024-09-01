const fs = require("fs")
//console.log(fs)
console.log("Starting...")
//fs.writeFileSync("nodejs/myfile.txt","Hello World from Asif")
/*fs.writeFile("nodejs/files-fsandpath/myfile2.txt", "Hello World from Asif", () => {
    console.log("Done...")
    fs.readFile("nodejs/files-fsandpath/myfile2.txt", "utf-8", (err, data) => {
        console.log(err, data.toString())
    })
})*/
// for reduse call back hell use promise
fs.appendFile("nodejs/files-fsandpath/myfile2.txt", "\nHello World from Asif", (e,d) => {
    console.log(d)
})
console.log("End...")