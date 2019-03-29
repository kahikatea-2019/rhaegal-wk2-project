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
  let randomId
  const newArr = []
  data.drinks.filter(current => {
    current.ingredients.find(string => {
      if (string === ingredient) {
        newArr.push([current.id])
        randomId = newArr[Math.floor(Math.random() * newArr.length)]
        console.log(randomId)
      }
    })
  })
  // const id = Math.random(newArr)
  res.redirect(`drink/${randomId}`)
})
// router.get('/drink/add', (req, res) => {
//   res.render('add-form', data)
// }
// router.post('/drink/add', (req, res) => {

// }
