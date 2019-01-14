import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { APP_RESET } from '../actions/types'
import auth from './auth'
import balance from './balance'
import config from './config'

const appReducer = combineReducers({
  form,
  auth,
  balance,
  config
})

export default (state, action) => {
  if (action.type === APP_RESET) {
    state = undefined
  }

  return appReducer(state, action)
}
