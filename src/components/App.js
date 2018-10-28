import React, { Component } from 'react'
import { fetchInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <AddPoll />

          //checklist
          // <Dashboard /> READY
          // <Leaderboard /> READY
        }
      </div>
    )
  }
}
function mapStateToProps ({ authedUser }){
  return{
    loading: authedUser === null //will be true when authed user is null
  }
}
export default connect(mapStateToProps)(App)