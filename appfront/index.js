const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.get('/items', (request, response) => {
 if (request.method === 'GET') {
   const items = require('./items/index')
   response.status(200).jsonp(items())
 }
})

server.listen(port, () => {
 console.log('JSON Server is running')
})
