import logger from 'redux-logger'

import React from 'react'

const MyPoints = props => {
  return <h1>You have {props.user.points} points</h1>
}

export default MyPoints
