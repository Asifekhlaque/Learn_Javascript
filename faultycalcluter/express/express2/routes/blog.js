const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})


// define the about route
router.get('/blogf/:slug', (req, res) => {
    res.send(`fetching blog ${req.params.slug}`)
})
module.exports = router