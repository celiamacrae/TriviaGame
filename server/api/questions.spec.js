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

  const newQuestion = {
    q: 'New Question',
    correct: 'Correct Answer for New Q',
    incorrect1: 'incorrect1 Answer for New Q',
    incorrect2: 'incorrect2 Answer for New Q',
    incorrect3: 'incorrect3 Answer for New Q'
  }

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

    it('POST /api/questions', async () => {
      const res = await request(app)
        .post('/api/questions')
        .send(newQuestion)
        .expect(200)

      let question = await Question.findOne({where: {q: 'New Question'}})

      expect(res.body).to.be.an('object')
      expect(question.q).to.be.equal(newQuestion.q)
    })
  }) // end describe('/api/questions')
}) // end describe('Question routes')
