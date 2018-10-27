import React, { Component } from 'react'
import { getInitialData } from '../utils/api'
class App extends Component {

  // componentDidMount(){
  //   getInitialData()
  //     .then((database) => {
  //       const polls = database.polls
  //       const users = database.users
  //       console.log('Users: ', users )
  //     })
  // }
  render() {
    return (
      <div>
        Starter Code.
      </div>
    )
  }
}

export default App