const route = require('express').Router()
const path = require('path')
const apiRoutes = require('./api')
route.use('/api', apiRoutes)

route.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
})

route.get('*', (req,res) =>{
res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = route