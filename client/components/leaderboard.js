import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/allUsers'

class LeaderBoard extends React.Component {
  constructor() {
    super()

    this.mostPoints = this.mostPoints.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchUsers()
  }

  mostPoints(users) {
    let copy = [...users]
    copy.sort((a, b) => b.points - a.points)
    return copy
  }

  render() {
    const sorted = this.mostPoints(this.props.users)
    return sorted.length ? (
      <table>
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Points</th>
            {sorted.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.nickname}</td>
                  <td>{user.points}</td>
                </tr>
              )
            })}
          </tr>
        </thead>
        <tbody />
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
