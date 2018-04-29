// Ensure we have establihed a connection to the database
const mongoose = require('./init')

// Define the models
const HotSauce = mongoose.model('HotSauce', {
  name: String,
  heatLevel: Number,
  sauceInfo: String
})

module.exports = HotSauce