import logger from 'redux-logger'

import React from 'react'

const Answer = props => {
  return props.selected ? (
    <div id="answer">
      <h1>{props.correct}</h1>
      <button onClick={props.nextQuestion}>Next Question</button>
    </div>
  ) : (
    <div />
  )
}

export default Answer
