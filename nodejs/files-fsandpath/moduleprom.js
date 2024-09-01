import fs from 'fs/promises'
let a=await fs.readFile("nodejs/files-fsandpath/myfile2.txt")
let b=await fs.appendFile("nodejs/files-fsandpath/myfile2.txt","\nAsif is my name") 
console.log(a.toString(),b)
console.log(a.toString())