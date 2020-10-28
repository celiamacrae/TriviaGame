import logger from 'redux-logger'

import React from 'react'

const Board = props => {
  const q = props.q
  console.log(props)
  return (
    <div id="board">
      <h1>Question # {q.id}</h1>
      <h3>{q.q}</h3>
      <div id="buttons">
        <button
          className="ansbox"
          disabled={props.selected}
          onClick={props.selectBox}
          value={q.correct}
        >
          {q.correct}
        </button>
        <button
          className="ansbox"
          disabled={props.selected}
          onClick={props.selectBox}
          value={q.incorrect1}
        >
          {q.incorrect1}
        </button>
        <button
          className="ansbox"
          disabled={props.selected}
          onClick={props.selectBox}
          value={q.incorrect2}
        >
          {q.incorrect2}
        </button>
        <button
          className="ansbox"
          disabled={props.selected}
          onClick={props.selectBox}
          value={q.incorrect3}
        >
          {q.incorrect3}
        </button>
      </div>
    </div>
  )
}

export default Board
