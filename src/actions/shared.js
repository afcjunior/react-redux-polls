import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading} from 'react-redux-loading'
//mocks one of the users in our mock DB as being authenticated.
const AUTHED_ID = 'tylermcginnis'
//const AUTHED_ID = 'dan_abramov'

//will be a thunk
export function fetchInitialData(){
  return (dispatch) => {
    dispatch(showLoading()) //from react-redux-loading
    return getInitialData()
      .then(({ users, polls })=>{
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())  //from react-redux-loading
      })
  }
}