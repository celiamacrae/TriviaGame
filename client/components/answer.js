import logger from 'redux-logger'
import React from 'react'
import {Link} from 'react-router-dom'

const Answer = props => {
  return props.selected ? (
    <div id="answer">
      <h1>{props.correct}</h1>
      {props.counter < 9 ? (
        <button onClick={props.nextQuestion} disabled={props.counter === 9}>
          Next Question
        </button>
      ) : (
        <Link to="/leaderboard">
          <button>View Leaderboard</button>
        </Link>
      )}
    </div>
  ) : (
    <div />
  )
}

export default Answer
