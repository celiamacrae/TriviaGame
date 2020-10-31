import logger from 'redux-logger'

import React from 'react'

const Board = props => {
  const q = props.q
  let shuffledQuestions = props.shuffleQuestions(
    q.correct,
    q.incorrect1,
    q.incorrect2,
    q.incorrect3
  )
  return (
    <div id="board">
      <h1>Question # {q.id}</h1>
      <h3>{q.q}</h3>
      <div id="buttons">
        {shuffledQuestions.map(question => {
          return (
            <button
              className="ansbox"
              disabled={props.selected}
              onClick={props.selectBox}
              value={question}
            >
              {question}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Board
