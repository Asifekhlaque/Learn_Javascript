//todo const { createServer } = require('node:http');
/*import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)  => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Node bro kaha ho bhai ma nodemon banaya hai\n');
});

server.listen(port, hostname, () =>  { 
    console.log(`Server running at http://${hostname}:${port}/`);
});*/
//! for auto reload use nodemon
// for install nodemon use npm install -g nodemon
// nodemon server.js
/*import {a,c} from './mymodule.js'
console.log(a,c)*/
/*import obj from './mymodule.js'
console.log(obj)*/
/*import Asif from './mymodule.js'
console.log(Asif)*/

const a= require("./mymodule2")
console.log(a)