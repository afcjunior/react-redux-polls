import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component{
  state = {
    selected: 'unanswered'
  }

  selectAnswered = () => {
    this.setState(() => ({
      selected: 'answered'
    }))
  }

  selectUnanswered = () => {
    this.setState(() => ({
      selected: 'unanswered'
    }))
  }

  render(){
    const { selected } = this.state
    const { answered, unanswered } = this.props
    const list = selected === 'answered'
      ? answered
      : unanswered
    return(
      <div>
        <div className='dashboard-toggle'>
          <button
            style={{textDecoration: selected === 'unanswered' ? 'underline' : null}}
            onClick={this.selectUnanswered}>
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{textDecoration: selected === 'answered' ? 'underline' : null}}
            onClick={this.selectAnswered}>
            Answered
          </button>
        </div>
        <div className='dashboard-list'>
          <ul>
            {
             list.map((poll) => (
               <li key={poll.id}>{poll.question}</li>
             ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { authedUser, polls, users}){
  //just standard object/array manipulation using the authed user's id, the polls list and the users list.

  //questions the user has answered.
  const answered = users[authedUser].answers
    .map(id => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  //questions the user hasn't answered yet.
  const unanswered = Object.keys(polls)
    .filter((id) => !users[authedUser].answers.includes(id))
    .map(id => polls[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return{
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)