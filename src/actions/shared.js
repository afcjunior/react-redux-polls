// export function getInitialData () {
//   return Promise.all([
//     _getUsers(),
//     _getPolls(),
//   ]).then(([users, polls]) => ({
//     users: formatUsers(users),
//     polls: formatPolls(polls),
//   }))
// }

import { getInitialData } from '../utils/api'
import { receivePolls } from './polls'
import { receiveUsers } from './users'
import { setAuthUser } from './authedUser'

//mocks one of the users in our mock DB as being authenticated.
const AUTHED_ID = 'dan_abramov'

//will be a thunk
export function fetchInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then(({ users, polls })=>{
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthUser(AUTHED_ID))

      })
  }
}