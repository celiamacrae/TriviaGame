import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'

/**
 * INITIAL STATE
 */
const defaultQuestions = []

/**
 * ACTION CREATORS
 */
const getQuestions = questions => ({type: GET_ALL_QUESTIONS, questions})

/**
 * THUNK CREATORS
 */
export const fetchQuestions = () => async dispatch => {
  try {
    const res = await axios.get('/api/questions')
    dispatch(getQuestions(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultQuestions, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return action.questions
    default:
      return state
  }
}
