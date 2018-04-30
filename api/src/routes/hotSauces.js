const express = require('express')
const HotSauce = require('../models/hotSauce')

const router = express.Router()

// List all artists
router.get('/hotSauces', (req, res) => {
  // Ask the model to list all documents
  HotSauce.find()
    // Once it loads the documents
    .then((hotSauces) => {
      // Send them back as a response
      res.json(hotSauces)
    })
})

// Read an individal artist
router.get('/hotSauces/:id', (req, res) => {
  const id = req.params.id
  // Ask the model for the document with this id
  HotSauce.findById(id)
    // Once it has loaded this document
    .then((hotSauce) => {
      // Hot sauce found
      if (hotSauce) {
        res.json(hotSauce)
      }
      // Hot sauce not found
      else {
        res.status(404).json({ error: `Hot sauce not found with id:'${id}'` })
      }
    })
    // If an other error occurs, display message of the error
    .catch((error) => {
      res.status(400).json({ error: error.message })
    })
})

// Create
router.post('/hotSauces', (req, res) => {
  const attributes = req.body
  HotSauce.create(attributes)
    // Success
    .then((hotSauce) => {
      res.status(201).json(hotSauce)
    })
    // Failure
    .catch((error) => {
      res.status(400).json({ error: error })
    })
})

// Update
router.patch('/hotSauces/:id', (req, res) => {
  const attributes = req.body
})

// Destroy
router.delete('/hotSauces/:id', (req, res) => {

})

module.exports = router