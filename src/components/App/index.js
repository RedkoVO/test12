import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import thunk from 'redux-thunk'
import rootReducer from '../../redux/reducers'
import gC from '../../constants'

import RootRoute from '../../containers/App/Routes/RootRoute'

const App = props => {
  const { history } = props
  const store = createStore(rootReducer, applyMiddleware(thunk))
  const breakpointValues = {
    xs: gC.BRECKPOINT.XS,
    sm: gC.BRECKPOINT.SM,
    md: gC.BRECKPOINT.MD,
    lg: gC.BRECKPOINT.LG,
    xl: gC.BRECKPOINT.XL
  }
  const theme = createMuiTheme({
    breakpoints: { values: breakpointValues },
    typography: {
      useNextVariants: true
    }
  })

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <RootRoute />
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

export default App
