import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls'
import { ADD_ANSWER } from '../actions/answers'

export default function polls(state = {}, action){
  switch(action.type){
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL :
      return {
        ...state,
        [action.poll.id]: action.poll,
      }
    case ADD_ANSWER :
      const { answer, id, authedUser, } = action
      const poll = state[id] //in the polls reducer, state is just the polls portion of the state, so just need the id
      const votesKey = answer + 'Votes'
      return{
        ...state,
        [action.id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser]) //keep it the same, but add the autheduser's vote
        }
      }
    default :
      return state
  }
}