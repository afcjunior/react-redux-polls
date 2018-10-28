import React, { Component} from 'react'
import { connect } from 'react-redux'

function Leaderboard ({ users, }) {
  console.log(users)
  return(
    <div>
      <h1>LEADERBOARD</h1>
      <ul>
      {users.map((user)=>(
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`}/>
          <div>
            <h1>{user.name}</h1>
            <p>Polls Answered: {user.answers}</p>
            <p>Polls Created: {user.polls}</p>
            <h5>Total Score: {user.answers + user.polls} </h5>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}


function mapStateToProps({ users }){
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, polls, answers } = users[id]

        return{
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        }
      }).sort((a,b) => b.polls + b.answers > a.polls + a.answers)
  }
}

export default connect(mapStateToProps)(Leaderboard)