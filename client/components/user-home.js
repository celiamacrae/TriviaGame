import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('HERE', this.props.user)
    return (
      <div>
        <h1>Welcome, {this.props.user.nickname}.</h1>
        <h3>You currently have {this.props.user.points} points.</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
