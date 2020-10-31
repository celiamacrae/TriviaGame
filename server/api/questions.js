const router = require('express').Router()
const {Question} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const questions = await Question.findAll()
    let shuffledQs = shuffle(questions)
    res.json(shuffledQs)
  } catch (err) {
    next(err)
  }
})

function shuffle(arr) {
  let currIdx = arr.length
  let tempVal
  let randomIdx

  while (currIdx !== 0) {
    randomIdx = Math.floor(Math.random() * currIdx)
    currIdx -= 1
    tempVal = arr[currIdx]
    arr[currIdx] = arr[randomIdx]
    arr[randomIdx] = tempVal
  }

  return arr
}
