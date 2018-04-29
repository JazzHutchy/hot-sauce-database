const mongoose = require('mongoose')

// Connect to our local database
mongoose.connect('mongodb://localhost/hot-sauce-api', (error) => {
  // If there's an error connecting to the database
  if (error) {
    console.error('Error connecting to MongoDB database', error)
  }
})

// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise

module.exports = mongoose