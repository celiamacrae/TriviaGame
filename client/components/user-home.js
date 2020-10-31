import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {nickname, email, points, roundsPlayed} = props

  return (
    <div id="home">
      <h3>Welcome, {nickname}.</h3>
      <h4>You have {points} points.</h4>
      <h4>You have played {roundsPlayed} rounds of trivia.</h4>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    nickname: state.user.nickname,
    email: state.user.email,
    points: state.user.points,
    roundsPlayed: state.user.roundsPlayed
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  points: PropTypes.number,
  roundsPlayed: PropTypes.number,
  nickname: PropTypes.string
}
