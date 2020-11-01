import MockAxiosAdapter from 'axios-mock-adapter'
import {expect} from 'chai'
import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import enforceImmutableState from 'redux-immutable-state-invariant'

import reducer from './question'
import {fetchQuestions} from './question'

let store
let mockAxios

describe('Question Thunks', () => {
  beforeEach(() => {
    mockAxios = new MockAxiosAdapter(axios)
    store = createStore(
      reducer,
      applyMiddleware(thunkMiddleware, enforceImmutableState())
    )
  })

  afterEach(() => {
    mockAxios.restore()
  })

  const q1 = {
    q: 'q',
    correct: 'c',
    incorrect1: 'i1',
    incorrect2: 'i2',
    incorrect3: 'i3'
  }

  describe('GET /questions succeeds', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/questions').reply(200, [q1])
    })

    it('sets the received questions on state', async () => {
      await store.dispatch(fetchQuestions())
      const state = store.getState()
      expect(state).to.deep.equal([q1])
    })
  })
})
