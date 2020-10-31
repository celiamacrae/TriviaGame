/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  const codysEmail = 'cody@puppybook.com'

  beforeEach(() => {
    return User.create({
      email: codysEmail,
      nickname: 'Cody'
    })
  })

  describe('/api/users/', () => {
    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')

  describe('PUT /api/users/:userid/addRound', () => {
    it('will add a round to user roundsPlayed', async () => {
      const res = await request(app)
        .put('/api/users/1/addRound')
        .expect(200)

      expect(res.body).to.be.an('Object')
      expect(res.body.roundsPlayed).to.be.equal(1)
    })
  }) //end describe('/api/users/:userid/addRound')

  describe('PUT /api/users/:userid/updatePoints', () => {
    it('will update players max points', async () => {
      const res = await request(app)
        .put('/api/users/1/updatePoints')
        .send({points: 5})
        .expect(200)

      expect(res.body).to.be.an('Object')
      expect(res.body.points).to.be.equal(5)
    })
  }) //end describe('/api/users/:userid/updatePoints')
}) // end describe('User routes')
