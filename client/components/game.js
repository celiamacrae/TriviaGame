import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestions} from '../store/question'
import {updateUserPoints, addOneRound} from '../store/user'
import Board from './gameboard'
import Answer from './answer'
import MyPoints from './myPoints'
import TimerComp from './timer'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      selected: false,
      correct: 'Correct',
      started: false,
      currentScore: 0
    }
    this.selectBox = this.selectBox.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.add = this.add.bind(this)
    this.shuffleQuestions = this.shuffleQuestions.bind(this)
    this.shuffle = this.shuffle.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchQuestions()
  }

  selectBox(e) {
    if (e.target.value === this.props.questions[this.state.counter].correct) {
      this.setState({correct: 'Correct!', selected: true})
      this.add()
    } else {
      this.setState({correct: 'Incorrect', selected: true})
    }
  }

  nextQuestion() {
    let next = this.state.counter + 1
    if (next < this.props.questions.length) {
      this.setState({counter: next, selected: false})
    }
  }

  async add() {
    let nextScore = this.state.currentScore + 1
    await this.setState({currentScore: nextScore})
    const id = this.props.user.id
    if (this.props.user.points < this.state.currentScore) {
      this.props.updateUserPoints(id, this.state.currentScore)
    }
  }

  shuffleQuestions(correct, incorrect1, incorrect2, incorrect3) {
    let unshuffled = [correct, incorrect1, incorrect2, incorrect3]
    return this.shuffle(unshuffled)
  }

  shuffle(arr) {
    let currIdx = arr.length
    let tempVal
    let randomIdx

    while (currIdx !== 0) {
      randomIdx = Math.floor(Math.random() * currIdx)
      currIdx -= 1
      tempVal = arr[currIdx]
      arr[currIdx] = arr[randomIdx]
      arr[randomIdx] = tempVal
    }

    return arr
  }

  startGame() {
    const id = this.props.user.id
    this.setState({started: true})
    this.props.addOneRound(id)
  }

  render() {
    const q = this.props.questions[this.state.counter]

    return this.props.questions.length && this.state.started ? (
      <div id="game">
        <div>
          <MyPoints
            user={this.props.user}
            currScore={this.state.currentScore}
          />
          {/* <TimerComp /> */}
          <Board
            q={q}
            num={this.state.counter + 1}
            selectBox={this.selectBox}
            selected={this.state.selected}
            correct={this.state.correct}
            shuffleQuestions={this.shuffleQuestions}
          />
          <Answer
            selected={this.state.selected}
            correct={this.state.correct}
            nextQuestion={this.nextQuestion}
            counter={this.state.counter}
            score={this.state.currentScore}
          />
        </div>
      </div>
    ) : (
      <div id="start">
        <button id="start_btn" onClick={this.startGame}>
          Start Game
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  questions: state.questions,
  user: state.user
})

const mapDispatch = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  updateUserPoints: (id, points) => dispatch(updateUserPoints(id, points)),
  addOneRound: id => dispatch(addOneRound(id))
})

export default connect(mapState, mapDispatch)(Game)
