// Dependincies
const express = require('express')
const hbs = require('express-handlebars')
const data = require('./data.json')

const server = express()

// Export
module.exports = server

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Routes
// Home page
server.get('/', (req, res) => {
  res.redirect('/drink')
})

server.get('/drink', (req, res) => {
  res.render('partials/form', data)
})

// Page displaying drink after recieving POST
server.get('/drink/:id', (req, res) => {
  const getId = data.drinks.find(i => i.id === (req.params.id))
  res.render('partials/result', getId)
})

server.post('/drink', (req, res) => {
  const ingredient = req.body.ingredient
  let returnedDrinkId
  data.drinks.filter(current => {
    // Increment through ingredients of current and check if it is ingredients matches
    current.ingredients.find(string => {
      if (string === ingredient) {
        returnedDrinkId = current.id
      }
    })
  })

  const id = returnedDrinkId
  console.log(id)
  // const id = Math.random(newArr)
  res.redirect(`drink/${id}`)
})
