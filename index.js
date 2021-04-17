const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
app.use(cors());

app.post('/register', (req, res) => {
  var user = req.body
  res.json({result: 'Success message from server'})
})

app.put('/login', (req, res) => {
  var user = req.body
  res.json({result: 'Success message from server'})
})

app.listen(port, () => {
console.log('running server')
})
