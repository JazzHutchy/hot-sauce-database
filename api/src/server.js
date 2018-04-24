const express = require('express')

const server = express()
// Start the server
server.listen(7000, () => {
  console.log("Server has started at http://localhost:7000")
})
