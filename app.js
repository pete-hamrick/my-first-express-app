const express = require('express')
const app = express()

const discData = require('./data.js');

app.get('/', (req, res) => {
    res.send('Hello World! Go to /discs to look at some data')
})
app.get('/discs', (req, res) => {
    res.json(discData)
})

app.get('/discs/:id', (req, res) =>{
    console.log(req.params.id);
    const discId = Number(req.params.id)
    const disc = discData.find(item => item.id === discId);
    console.log(disc);
    res.json(disc)
})

module.exports = app;