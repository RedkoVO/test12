import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../redux/reducers'

import RootRoute from '../../containers/App/Routes/RootRoute'

const App = props => {
  const { history } = props
  const store = createStore(rootReducer, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <Router history={history}>
        <RootRoute />
      </Router>
    </Provider>
  )
}

export default App