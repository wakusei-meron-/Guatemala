import { combineReducers } from 'redux'
import images from './images'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  images,
  todos,
  visibilityFilter
})

export default todoApp
