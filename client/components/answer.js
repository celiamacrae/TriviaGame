import logger from 'redux-logger'
import React from 'react'
import {Link} from 'react-router-dom'

const Answer = props => {
  return props.selected ? (
    <div id="answer">
      <h1>{props.correct}</h1>
      {props.correct === 'Incorrect' ? (
        <h3>The correct answer is "{props.correctAnswer}"</h3>
      ) : (
        <div />
      )}
      {props.counter < 9 ? (
        <button
          id="next"
          onClick={props.nextQuestion}
          disabled={props.counter === 9}
        >
          Next Question
        </button>
      ) : (
        <div id="finalscore">
          <h3>You answered {props.score}/10 questions correctly.</h3>
          <Link to="/leaderboard">
            <button id="next">View Leaderboard</button>
          </Link>
        </div>
      )}
    </div>
  ) : (
    <div />
  )
}

export default Answer
