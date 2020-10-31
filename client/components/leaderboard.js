import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allUsers'

class LeaderBoard extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.fetchUsers()
  }

  render() {
    const users = this.props.users
    return users.length ? (
      <div id="leaderboard">
        <h3>LEADERBOARD</h3>

        <table>
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              if (user.points > 0) {
                return (
                  <tr key={user.id}>
                    <td>{user.nickname}</td>
                    <td>{user.points}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
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
