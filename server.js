const express = require('express');
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon")

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Welcome to the PokeMon App!')
  })

app.get('/pokemon', (req, res) => {
    res.render("Index", {allPokemon: pokemon})
  })

app.get('/pokemon/:indexOfPokemon', (req, res) => {
    res.render("Show", { //second param must be an object
      pokemon: pokemon[req.params.indexOfPokemon]}) 
      
  })

app.listen(port, function () {
    console.log('Listening on port 3000');
  });