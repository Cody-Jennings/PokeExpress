require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000;
const Pokemon = require("./models/pokemon")

// Global configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

app.use(express.static('public'))


//connect to mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })



// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// const defaultPokemon = [
//   {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//   {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//   {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//   {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//   {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//   {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//   {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
// ]

//Set up middleware
app.use((req, res, next) => {
  console.log('I run for all routes')
  next()
})

//near the top, around other app.use() calls
app.use(express.urlencoded({ extended: false }))
mongoose.set('strictQuery', true)

//view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.send('Welcome to the PokeMon App!')
})

//Index route
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      allPokemon: allPokemon, // getting all pokemon from db to pass as props
    })
  })
})



//New route to get a form to create a new pokemon record
app.get('/pokemon/new', (req, res) => {
  res.render('New')
})

app.post('/pokemon', (req, res) => {
  let pokemonBody = req.body
  pokemonBody.img = pokemonBody.name
  Pokemon.create(pokemonBody, (error, createdPokemon) => {
    res.redirect('/pokemon')
  })
})

// Pokemon.insertMany(defaultPokemon)
// // if database transaction succeeds
// .then((pokemon) => {
//   console.log(pokemon)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

//Show Route
app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", { //second param must be an object
      pokemon: foundPokemon
    })
  })
})

app.listen(port, function () {
  console.log('Listening on port 3000');
});