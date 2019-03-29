const express = require('express')
const router = express.Router()
const data = require('./data.json')

module.exports = router

router.get('/', (req, res) => {
  res.render('home')
})

// Page displaying drink after recieving POST
router.get('/drink/:id', (req, res) => {
  const drink = data.drinks.find(i => i.id === (req.params.id))
  res.render('result', drink)
})

router.post('/drink', (req, res) => {
  const ingredient = req.body.ingredient
  const newArr = data.drinks.filter(drink => {
    return drink.ingredients.includes(ingredient)
  })
  const random = newArr[Math.floor(Math.random() * newArr.length)]
  res.redirect(`/drink/${random.id}`)
})
