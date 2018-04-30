const express = require('express')
const bodyParser = require('body-parser')

const server = express()

// Allow POST/PUT/PATCH requests to pass along JSON,
// and it will be decoded for us at 'req.json
server.use(bodyParser.json())

// Routes
server.use([
  require('./routes/hotSauces')
])

// Start the server
server.listen(7000, () => {
  console.log("Server has started at http://localhost:7000")
})
