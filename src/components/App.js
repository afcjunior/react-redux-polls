import React, { Component } from 'react'
import { fetchInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchInitialData())
  }

  render() {
    return (
      <div>
        {
          this.props.loading === true ? null : <Dashboard />
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