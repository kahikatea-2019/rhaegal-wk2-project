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
  // res.render()
})
server.post('/drink', (req, res) => {
  const ingredient = req.body.ingredient
  console.log(ingredient)
  res.send('recieved')
  // const newArr = data.ingredients.filter(i => {
  //   if()
  // })
})
