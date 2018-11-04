import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'

class AddPoll extends Component{
  state = {
    question: '',
    a:'',
    b:'',
    c:'',
    d:'',
  }

  handleInputChange = (event) => {
    const { value, name} = event.target
    this.setState(() => ({
      [name]: value,
    }))
  }

  isDisabled = () => {
    const { question, a, b, c, d} = this.state
    return question === ''
      || a === ''
      || b === ''
      || c === ''
      || d === ''
  }

  clearFields = () => {
    this.setState(() => ({
      question: '',
      a:'',
      b:'',
      c:'',
      d:'',
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Handlesubmit', this.state)

    this.props.dispatch(handleAddPoll(this.state))
    this.props.history.push('/')
  }


  render(){
    const { question, a, b, c, d } = this.state

    return(
      <form className='add-form' onSubmit={this.handleSubmit}>
        <h3 style={{marginBottom: 5}}>Poll title</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name='question'
          className='input'
          type='text'/>

        <h3>Enter the options</h3>

        <label
          className='label'
          htmlFor='a'>
          A.
        </label>
        <input
          value={a}
          onChange={this.handleInputChange}
          name='a'
          className='input'
          id='a'
          type='text'
          />

          <label
          className='label'
          htmlFor='b'>
          B.
        </label>
        <input
          value={b}
          onChange={this.handleInputChange}
          name='b'
          className='input'
          id='b'
          type='text'
          />

          <label
          className='label'
          htmlFor='c'>
          C.
        </label>
        <input
          value={c}
          onChange={this.handleInputChange}
          name='c'
          className='input'
          id='c'
          type='text'
          />

          <label
          className='label'
          htmlFor='d'>
          D.
        </label>
        <input
          value={d}
          onChange={this.handleInputChange}
          name='d'
          className='input'
          id='d'
          type='text'
          />

        <button
          type='submit'
          className='btn'
          disabled={this.isDisabled()}
        >
        Submit
        </button>
        <span className='span'> </span>
        <button
          type='clear'
          className='btn'
          onClick={this.clearFields}
        >
        Clear
        </button>
      </form>
    )
  }
}

// dont need this here as this component doesnt need any state from the store. It does need dispatch though, so we will connect it.
// function mapStateToProps({ }){
//   return {

//   }
// }
export default connect()(AddPoll)