const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
var fullname;
var email;
var password;
var userValid;
app.use(cors());
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.post('/register', (req, res) => {
  fullname = req.body.fullname;
  email = req.body.email;
  password = req.body.password;
  res.json({result: 'Success message from server, registration complete!!'})
})

app.put('/login', (req, res) => {
  var userValid = req.body;
  if (email == userValid.email && password == userValid.password) {
    res.json({result: 'Success message from server, you are a valid user'})
  }
  else {
    res.json({result: 'Invalid User'})
  }
})

app.listen(port, () => {
console.log('running server')
})
