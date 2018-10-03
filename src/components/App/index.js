import React from 'react'
import { Router } from 'react-router-dom'

import RootRoute from '../../containers/App/Routes/RootRoute'

const App = props => {
  const { history } = props

  return (
    <Router history={history}>
      <RootRoute />
    </Router>
  )
}

export default App