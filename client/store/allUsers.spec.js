import MockAxiosAdapter from 'axios-mock-adapter'
import {expect} from 'chai'
import axios from 'axios'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import enforceImmutableState from 'redux-immutable-state-invariant'

import reducer from './allUsers'
import {fetchUsers} from './allUsers'

let store
let mockAxios

describe('All Users Thunks', () => {
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

  const user1 = {email: 'celia@email.com', nickname: 'celia'}
  const user2 = {email: 'john@email.com', nickname: 'john'}

  describe('GET /users succeeds', () => {
    beforeEach(() => {
      mockAxios.onGet('/api/users').reply(200, [user1, user2])
    })

    it('sets the received users on state', async () => {
      await store.dispatch(fetchUsers())
      const state = store.getState()
      expect(state).to.deep.equal([user1, user2])
    })
  })
})
