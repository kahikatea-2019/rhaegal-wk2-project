const server = require('./server')

const port = process.env.NODE_ENV || 4000

server.listen(port, function () {
  console.log('Server listening at ', port)
})
