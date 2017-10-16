import {
  FETCHED_USER,
  USER_FETCH_FAILED,
  USER_FETCH_START,
} from '../actions/types'

const userReducer = (state = {
  data: {},
  fetching: true,
  error: undefined
}, action) => {
  switch (action.type) {
    case USER_FETCH_START:
      return { 
        ...state, 
        fetching: true,
        error: undefined,
        data: {}
      }
    case FETCHED_USER:
      return { 
        ...state, 
        fetching: false,
        error: undefined,
        data: action.data 
      }
    case USER_FETCH_FAILED:
      return { 
        ...state, 
        fetching: false,
        error: action.error,
        data: {}
      }
    default:
      return state
  }
}

export default userReducer