const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'nickname', 'points', 'roundsPlayed']
    })
    let copy = [...users]
    copy.sort((a, b) => b.points - a.points)
    res.json(copy)
  } catch (err) {
    next(err)
  }
})

router.put('/:userid/addRound', async (req, res, next) => {
  try {
    const userid = req.params.userid
    let user = await User.findOne({
      where: {
        id: req.params.userid
      }
    })

    let newRounds = user.roundsPlayed + 1
    user.update({roundsPlayed: newRounds})
    res.send(user)
  } catch (err) {
    next(err)
  }
})

router.put('/:userid/updatePoints', async (req, res, next) => {
  try {
    const userid = req.params.userid
    let user = await User.findOne({
      where: {
        id: req.params.userid
      }
    })

    let newPoints = req.body.points
    await user.update({points: newPoints})
    res.send(user)
  } catch (err) {
    next(err)
  }
})
