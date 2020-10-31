import logger from 'redux-logger'

import React from 'react'

const MyPoints = props => {
  return (
    <div>
      <h3 id="my_points">Current Points: {props.currScore}</h3>
    </div>
  )
}

export default MyPoints
