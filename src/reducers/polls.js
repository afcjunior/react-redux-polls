import { RECEIVE_POLLS } from '../actions/polls'

export default function polls(state = {}, action){
  switch(action.type){
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }// would return state.concat(action.polls) return the same?

    default :
      return state
  }
}