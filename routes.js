const express = require('express')
const router = express.Router()
const data = require('./data.json')

module.exports = router

router.get('/', (req, res) => {
  res.redirect('/drink')
})

router.get('/drink', (req, res) => {
  res.render('partials/form', data)
})

// Page displaying drink after recieving POST
router.get('/drink/:id', (req, res) => {
  const getId = data.drinks.find(i => i.id === (req.params.id))
  res.render('partials/result', getId)
})

router.post('/drink', (req, res) => {
  const ingredient = req.body.ingredient
  let returnedDrinkId
  data.drinks.filter(current => {
    current.ingredients.find(string => {
      if (string === ingredient) {
        returnedDrinkId = current.id
      }
    })
  })
  // const id = Math.random(newArr)
  res.redirect(`drink/${returnedDrinkId}`)
})
// router.get('/drink/add', (req, res) => {
//   res.render('add-form', data)
// }
// router.post('/drink/add', (req, res) => {

// }
