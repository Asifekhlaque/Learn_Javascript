// User of Express
// it is a web application framework for Node.js
// How to use it ?
// 1. npm install express
// npm i express
/*const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="color:red">Hello World</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/
//! for auto reload use nodemon server.js

const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // for static file
app.get('/', (req, res) => {
    res.send('Express js!')
})
// for making different routes
// ${req.params.id} it is used for get request
/*app.get('/:id', (req, res) => {
    res.send(`Express js Bhai! ${req.params.id}`)
})
app.get('/:blog', (req, res) => {
    res.send(`Express js Bhai! blog`)
})
app.get('/blog/:b', (req, res) => {
    res.send(`Express js Bhai! blog b`)
    console.log(req.params.b)
    console.log(req.query.b)
})*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get is used for get request
// app.post is used for post request
// app.put is used for put request
// app.delete is used for delete request
// app.patch is used for patch request
// app.options is used for options request
// app.head is used for head request
// app.all is used for all request
// app.use is used for use request
// app.listen is used for listen request
// app.param is used for param request
// app.set is used for set request
// app.use is used for use request