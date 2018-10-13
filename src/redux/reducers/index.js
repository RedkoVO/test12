import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import balance from './balance'

export default combineReducers({
  form,
  auth,
  balance
})