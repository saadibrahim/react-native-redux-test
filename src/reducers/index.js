import { combineReducers } from 'redux'
import user from './userReducer'
import slides from './slidesReducer'
import grid from './gridReducer'

const rootReducer = combineReducers({
  user,
  slides,
  grid
})

export default rootReducer