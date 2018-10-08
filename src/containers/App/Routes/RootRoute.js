import React from 'react'
import compose from 'recompose/compose'
import pure from 'recompose/compose'
import { Route, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import AsyncRegistration from '../../../containers/Auth/Registration/AsyncRegistration'
import AsyncDashboard from '../../../containers/Dashboard/AsyncDashboard'
import AsyncWallet from '../../../containers/Wallet/AsyncWallet'
import AsyncShop from '../../../containers/Shop/AsyncShop'
import AsyncGames from '../../../containers/Games/AsyncGames'
import AsyncFriends from '../../../containers/Friends/AsyncFriends'
import AsyncSettings from '../../../containers/Settings/AsyncSettings'

const RootRoute = props => {
  const { location } = props

  return (
    <Switch location={location}>
      <Route
        path={`/registration`}
        component={AsyncRegistration}
      />
      <RoutePage
        path={`/settings`}
        component={AsyncSettings}
      />
      <RoutePage
        path={`/friends`}
        component={AsyncFriends}
      />
      <RoutePage
        path={`/games`}
        component={AsyncGames}
      />
      <RoutePage
        path={`/shop`}
        component={AsyncShop}
      />
      <RoutePage
        path={`/wallet`}
        component={AsyncWallet}
      />
      <RoutePage
        path={`/`}
        component={AsyncDashboard}
      />
    </Switch>
  )
}

export default compose(
  // connect(mapStateToProps),
  withRouter,
  pure
)(RootRoute)