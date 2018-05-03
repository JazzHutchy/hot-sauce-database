const express = require('express')
const HotSauce = require('../models/hotSauce')

const router = express.Router()

// List all hot sauce
router.get('/hotSauces', (req, res) => {
  // Ask the model to list all documents
  HotSauce.find()
    // Once it loads the documents
    .then((hotSauces) => {
      // Send them back as a response
      res.json(hotSauces)
    })
})

// Read an individal sauce
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
      res.status(400).json({ error: error.message })
    })
})

// Update
router.patch('/hotSauces/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  HotSauce.findByIdAndUpdate(id, attributes, { new: true })
    .then((hotSauce) => {
      if (hotSauce) {
        console.log('Found Hot sauce and updated')
        res.status(200).json(hotSauce)
      }
      else {
        console.log('Not found')
        res.status(404).json({ error: `Hot sauce not found with '${id}'` })
      }
    })
    .catch((error) => {
      console.log('Uh oh, error has occured')
      res.status(400).json({ error: error.message })
    })

})

// Destroy
router.delete('/hotSauces/:id', (req, res) => {
  const id = req.params.id
  HotSauce.findByIdAndRemove(id)
    .then((hotSauce) =>
      res.json(hotSauce)
    )
    .catch((error) =>
      res.status(400).json({ error: error.message })
    )
})

module.exports = router