//plug ins
const express = require('express')
const PORT = process.env.PORT || 3001
const routes = require('./routes')
const app = express()
const path = require('path')
app.use(express.json())
app.use(express.static(path.join(__dirname, "./public/")));
app.use(express.urlencoded({extended:true}))
app.use(routes)
//listening to routes 
app.listen(PORT,() => {
    console.log(`localhost:${PORT}`)
})