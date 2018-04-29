const HotSauce = require('./hotSauce')

// List all existing hot sauces
HotSauce.find() // Find all hot sauce documents
  .then((hotSauces) => { // Once loaded this function is called
    console.log('Hot Sauces:', hotSauces)
  })
  .catch((error) => {
    console.error(error)
  })

// HotSauce.create({ name: 'Siracha', heatLevel: 3, sauceInfo: "It's not too hot" })
//   //When this is complete, this function will be called
//   .then((hotSauce) => {
//     console.log('Created sauce', hotSauce)
//   })