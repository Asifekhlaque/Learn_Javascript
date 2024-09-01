const express = require('express')
const app = express()
const port = 3000
const blog=require('./routes/blog')
const fs=require('fs')// for file system

app.use('/blog', blog)

app.use((req, res, next) => {
    console.log(req.headers)
    req.asif=" I am Asif"
    fs.appendFileSync("D:\\javascript\\express\\express3Middlewares\\log.txt", `${Date.now()} is a ${req.method} request\n`)
    console.log(`${Date.now()} is a ${req.method} request`)
    //res.send("Hello")
    next() // requsest hanging
})

app.use((req, res, next)=> {
    console.log('M2')
    next()
})

app.get('/', (req, res) => {
    res.send('Express Middlewares')
})

app.get('/about', (req, res) => {
    res.send('Express Middlewares'+req.asif)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Express Middleware is a function that can be used in express application
// It is a function that is called whenever a request is made to the server