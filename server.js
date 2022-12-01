const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the PokeMon App!')
  })



app.listen(port, function () {
    console.log('Listening on port 3000');
  });