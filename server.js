// Dependincies
const express = require('express')
const hbs = require('express-handlebars')
const router = require('./routes')

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

server.use('/', router)
