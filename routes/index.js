const router = require('express').Router()
const Beer = require('../models/Beer')

router.get('/', (req, res, next) => {
  Beer.find()
    .then(beers => {
      res.render('index', { beers })
    })
    .catch(err => {
      res.render('index', { err })
    })
})

router.get('/beer/:id', (req, res, next) => {
  const { id } = req.params
  Beer.findById(id)
    .then(beer => {
      res.render('detail', beer)
    })
    .catch(err => {
      res.render('detail', { err })
    })
})

module.exports = router
