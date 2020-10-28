const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  q: {
    type: Sequelize.STRING,
    allowNull: false
  },
  correct: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  incorrect3: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Question
