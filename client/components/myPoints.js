import logger from 'redux-logger'

import React from 'react'

const MyPoints = props => {
  return (
    <div id="my_points">
      <h3 id="curr_points">Current Points: {props.currScore}</h3>
    </div>
  )
}

export default MyPoints
