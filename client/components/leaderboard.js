import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allUsers'

class LeaderBoard extends React.Component {
  constructor() {
    super()

    // this.mostPoints = this.mostPoints.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchUsers()
  }

  render() {
    const users = this.props.users
    return users.length ? (
      <table>
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.nickname}</td>
                <td>{user.points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    ) : (
      <div />
    )
  }
}

const mapState = state => ({
  users: state.allUsers
})

const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(LeaderBoard)
