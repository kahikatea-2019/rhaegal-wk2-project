const express = require('express')
// const hbs = require('express-handlebars')
const server = express()

module.exports = server

server.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})