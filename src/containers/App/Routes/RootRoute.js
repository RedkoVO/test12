import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import withConfigAndAllBalance from '../../../hocs/withConfigAndAllBalance'
import secretKey from '../../../hocs/withSecretKey'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import AsyncAuthorization from '../../../containers/Auth/Authorization/AsyncAuthorization'
import AsyncFinishRegistration from '../../../containers/Auth/FinishRegistration/AsyncFinishRegistration'
import AsyncRegistration from '../../../containers/Auth/Registration/AsyncRegistration'
import AsyncConfirmEmail from '../../../containers/Auth/ConfirmEmail/AsyncConfirmEmail'
import AsyncDashboard from '../../../containers/Dashboard/AsyncDashboard'
import AsyncShop from '../../../containers/Shop/AsyncShop'
import AsyncGames from '../../../containers/Games/AsyncGames'
import AsyncGame from '../../../containers/Game/AsyncGame'
import AsyncStream from '../../../containers/Stream/AsyncStream'
import AsyncSkins from '../../../containers/Skins/AsyncSkins'
import AsyncVchange from '../../../containers/Vchange/AsyncVchange'
import AsyncCases from '../../../containers/Cases/AsyncCases'
import AsyncCase from '../../../containers/Case/AsyncCase'
import AsyncFriends from '../../../containers/Friends/AsyncFriends'
import AsyncSettings from '../../../containers/Settings/AsyncSettings'

// import whyDidYouUpdate from 'why-did-you-update'
// whyDidYouUpdate(React)

const RootRoute = props => {
  const { location, secretKey } = props

  return (
    <Switch location={location}>
      {secretKey ? (
        <Redirect exact from="/login" to="/" />
      ) : (
        <Redirect exact from="/" to="/login" />
      )}

      {!secretKey && <Route path={`/login`} component={AsyncAuthorization} />}

      {!secretKey && (
        <Route
          path={`/finish-registration`}
          component={AsyncFinishRegistration}
        />
      )}

      {!secretKey && (
        <Route path={`/registration`} component={AsyncRegistration} />
      )}

      {!secretKey && (
        <Route path={`/confirmation-email`} component={AsyncConfirmEmail} />
      )}

      {secretKey && <RoutePage path={`/settings`} component={AsyncSettings} />}

      {secretKey && <RoutePage path={`/friends`} component={AsyncFriends} />}

      {secretKey && <Route path={`/games`} component={AsyncGames} />}

      {secretKey && <Route path={`/game/:bundle`} component={AsyncGame} />}

      {secretKey && <Route path={`/stream`} component={AsyncStream} />}

      {secretKey && <Route path={`/skins`} component={AsyncSkins} />}

      {secretKey && <RoutePage path={`/vchange`} component={AsyncVchange} />}

      {secretKey && <Route path={`/cases`} component={AsyncCases} />}

      {secretKey && <Route path={`/case`} component={AsyncCase} />}

      {secretKey && <RoutePage path={`/shop`} component={AsyncShop} />}

      {secretKey && <RoutePage path={`/`} component={AsyncDashboard} />}

      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  secretKey,
  withConfigAndAllBalance,
  pure
)(RootRoute)
