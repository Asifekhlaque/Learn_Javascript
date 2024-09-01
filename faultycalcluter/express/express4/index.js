const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) => {
    let siteName="Express js"
    let searchText="Express js is a web application framework for Node.js"
    let search="Search Now"
    let arr=[1,2,3,4,5,6,7,8,9,10]
    res.render('index',{siteName:siteName,searchText:searchText,search:search,arr:arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle="Blog title from Express js"
    let blogContent="Blog content from Express js is a web application framework for Node.js"
    res.render('blog',{
        title:blogTitle,
        content:blogContent
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})