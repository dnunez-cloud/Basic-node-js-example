const express = require('express')
const app = express()
const port = 4000

app.get('/register', (req, res) => {
  let user = req.params;
  res.send(user)
  res.json({result: 'Success'})
})

app.post('/register', (req, res) => {
  let user = req.params;
  res.json({result: 'Success'})
})

app.listen(port, () => {
console.log('running server')
})
