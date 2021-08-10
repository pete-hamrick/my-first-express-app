console.log('hello, world!');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/cats', (req, res) => {
    console.log(req.query);
    res.send(`Cats are cute, especially ${req.query.name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
