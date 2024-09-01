// Require express
const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("Express! get")
    res.send('Express Postman!')
})

/*app.post('/', (req, res) => {
    console.log("Express! post")
    res.send('Express!')
})*/

/*app.put('/', (req, res) => {
    console.log("Express! put")
    res.send('Express!')
})*/

/*app.get('/index', (req, res) => {
    console.log("Express! put")
    res.sendFile('templates/index.html', { root: __dirname })
})*/

app.get('/api', (req, res) => {
    res.json({ name: 'Asif', age: 25 , course: 'BCA'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})