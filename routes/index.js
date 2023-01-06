//plug ins
const route = require('express').Router()
const path = require('path')
const apiRoutes = require('./api')
route.use('/api', apiRoutes)
//routes 
route.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

route.get('*', (req,res) =>{
res.sendFile(path.join(__dirname, "../public/index.html"));
})
//export file
module.exports = route