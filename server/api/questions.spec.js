/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Question = db.model('question')

describe('Question routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  beforeEach(() => {
    return Question.create({
      q: 'Question',
      correct: 'Correct Answer',
      incorrect1: 'incorrect1',
      incorrect2: 'incorrect2',
      incorrect3: 'incorrect3'
    })
  })

  describe('/api/questions/', () => {
    it('GET /api/questions', async () => {
      const res = await request(app)
        .get('/api/questions')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].correct).to.be.equal('Correct Answer')
    })
  }) // end describe('/api/users')
}) // end describe('Question routes')
