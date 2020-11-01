const {expect} = require('chai')
import shuffle from './helpers'

describe('Helper functions', () => {
  let arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(i)
  }
  it('shuffle', () => {
    const shuffle1 = shuffle(arr)
    const shuffle2 = shuffle(arr)
    expect(shuffle1).to.equal(shuffle2)
  })
})
