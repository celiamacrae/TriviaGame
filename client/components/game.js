import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../store/question'

class Game extends React.Component {
  async componentDidMount() {
    await this.props.fetchQuestions()
  }

  render() {
    console.log(this.props.questions[0])
    return (
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}

const mapState = state => ({
  questions: state.questions
})

const mapDispatch = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
})

export default connect(mapState, mapDispatch)(Game)
