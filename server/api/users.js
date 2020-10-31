const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'nickname', 'points']
    })
    let copy = [...users]
    copy.sort((a, b) => b.points - a.points)
    res.json(copy)
  } catch (err) {
    next(err)
  }
})

router.put('/:userid/addPoint', async (req, res, next) => {
  console.log(req.body)
  try {
    const userid = req.params.userid
    let user = await User.findOne({
      where: {
        id: req.params.userid
      }
    })

    let newPoints = user.points + 1

    user.update({points: newPoints})
    res.send(user)
  } catch (err) {
    next(err)
  }
})
