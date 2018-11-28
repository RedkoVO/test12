import React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/compose'
import withProps from 'recompose/withProps'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import AsyncAuthorization from '../../../containers/Auth/Authorization/AsyncAuthorization'
import AsyncRegistration from '../../../containers/Auth/Registration/AsyncRegistration'
import AsyncConfirmEmail from '../../../containers/Auth/ConfirmEmail/AsyncConfirmEmail'
import AsyncDashboard from '../../../containers/Dashboard/AsyncDashboard'
import AsyncWallet from '../../../containers/Wallet/AsyncWallet'
import AsyncShop from '../../../containers/Shop/AsyncShop'
import AsyncGames from '../../../containers/Games/AsyncGames'
import AsyncGame from '../../../containers/Game/AsyncGame'
import AsyncStream from '../../../containers/Stream/AsyncStream'
import AsyncSkins from '../../../containers/Skins/AsyncSkins'
import AsyncFriends from '../../../containers/Friends/AsyncFriends'
import AsyncSettings from '../../../containers/Settings/AsyncSettings'

// import whyDidYouUpdate from 'why-did-you-update'
// whyDidYouUpdate(React)

const RootRoute = props => {
  const { location, keyAuth } = props

  return (
    <Switch location={location}>
      {keyAuth ? (
        <Redirect exact from="/login" to="/" />
      ) : (
          <Redirect exact from="/" to="/login" />
        )}

      {!keyAuth && (
        <Route
          path={`/login`}
          component={AsyncAuthorization}
        />
      )}

      {!keyAuth && (
        <Route
          path={`/registration`}
          component={AsyncRegistration}
        />
      )}

      {!keyAuth && (
        <Route
          path={`/confirmation-email`}
          component={AsyncConfirmEmail}
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
        <Route
          path={`/games`}
          component={AsyncGames}
        />
      )}

      {keyAuth && (
        <Route
          path={`/game/:bundle`}
          component={AsyncGame}
        />
      )}

      {keyAuth && (
        <Route
          path={`/stream`}
          component={AsyncStream}
        />
      )}

      {keyAuth && (
        <Route
          path={`/skins`}
          component={AsyncSkins}
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