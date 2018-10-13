import React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/compose'
import withProps from 'recompose/withProps'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import AsyncAuthorization from '../../../containers/Auth/Authorization/AsyncAuthorization'
import AsyncRegistration from '../../../containers/Auth/Registration/AsyncRegistration'
import AsyncDashboard from '../../../containers/Dashboard/AsyncDashboard'
import AsyncWallet from '../../../containers/Wallet/AsyncWallet'
import AsyncShop from '../../../containers/Shop/AsyncShop'
import AsyncGames from '../../../containers/Games/AsyncGames'
import AsyncFriends from '../../../containers/Friends/AsyncFriends'
import AsyncSettings from '../../../containers/Settings/AsyncSettings'

const RootRoute = props => {
  const { location, keyAuth } = props
  
  return (
    <Switch location={location}>
      {keyAuth ? (
        <Redirect exact from="/registration" to="/" />
      ) : (
          <Redirect exact from="/" to="/registration" />
        )}

      {!keyAuth && (
        <Route
          path={`/registration`}
          component={AsyncRegistration}
        />
      )}

      {!keyAuth && (
        <Route
          path={`/login`}
          component={AsyncAuthorization}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/settings`}
          component={AsyncSettings}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/friends`}
          component={AsyncFriends}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/games`}
          component={AsyncGames}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/shop`}
          component={AsyncShop}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/wallet`}
          component={AsyncWallet}
        />
      )}

      {keyAuth && (
        <RoutePage
          path={`/`}
          component={AsyncDashboard}
        />
      )}
      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  // connect(mapStateToProps),
  withRouter,
  withProps(() => {
    return {
      keyAuth: localStorage.getItem('secretKey')
    }
  }),
  pure
)(RootRoute)