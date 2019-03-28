const server = require('./server')

const port = 4000

server.listen(port, function () {
  console.log('Server listening at ', port)
})
