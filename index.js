const server = require('./server')

const port = process.env.port || 3000

server.listen(port, function () {
  console.log('Server listening at ', port)
})
