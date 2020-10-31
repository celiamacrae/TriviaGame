import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allUsers'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="home">
        <h1>Welcome, {this.props.user.nickname}.</h1>
        <h3>Your max score is {this.props.user.points} points.</h3>
        <h3>
          You have player {this.props.user.roundsPlayed} rounds of trivia.
        </h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    allUsers: state.allUsers
  }
}
const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
