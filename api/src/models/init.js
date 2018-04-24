const mongoose = require('mongoose')

// Connect to our local database
mongoose.connect('mongodb://localhost/hot-sauce-api', { useMongoClient: true })
// Use the Promise functionality built into Node.js
mongoose.Promise = global.Promise

module.exports = mongoose