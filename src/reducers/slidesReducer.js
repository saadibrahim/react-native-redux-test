import {
  FETCHED_SLIDES,
  SLIDES_FETCH_FAILED,
  SLIDES_FETCH_START
} from '../actions/types'

const slidesReducer = (state = {
  data: {},
  fetching: true,
  error: undefined
}, action) => {
  switch (action.type) {
    case SLIDES_FETCH_START:
      return { 
        ...state, 
        fetching: true,
        error: undefined,
        data: {}
      }
    case FETCHED_SLIDES:
      return { 
        ...state, 
        fetching: false,
        error: undefined,
        data: action.data 
      }
    case SLIDES_FETCH_FAILED:
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

export default slidesReducer