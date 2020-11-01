const router = require('express').Router()
const {Question} = require('../db/models')
module.exports = router
const shuffle = require('../helpers')

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.findAll()
    let shuffledQs = shuffle(questions).slice(0, 10)
    res.json(shuffledQs)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const question = await Question.create(req.body)
    res.send(question)
  } catch (err) {
    next(err)
  }
})
