import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './reducers/auth'
import data from './reducers/data'

export default (history) => combineReducers({
  auth,
  data,
  router: connectRouter(history) 
})
