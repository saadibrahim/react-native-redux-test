import {
  FETCHED_GRID,
  GRID_FETCH_FAILED,
  GRID_FETCH_START
} from '../actions/types'

const gridReducer = (state = {
  data: {},
  fetching: true,
  error: undefined
}, action) => {
  switch (action.type) {
    case GRID_FETCH_START:
      return { 
        ...state, 
        fetching: true,
        error: undefined,
        data: {}
      }
    case FETCHED_GRID:
      return { 
        ...state, 
        fetching: false,
        error: undefined,
        data: action.data 
      }
    case GRID_FETCH_FAILED:
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

export default gridReducer