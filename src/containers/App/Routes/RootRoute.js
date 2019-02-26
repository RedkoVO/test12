import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import withConfigAndAllBalance from '../../../hocs/withConfigAndAllBalance'
import secretKey from '../../../hocs/withSecretKey'

import RoutePage from '../../../components/App/components/Routes/RoutePage'
import Authorization from '../../../containers/Auth/Authorization'
import FinishRegistration from '../../../containers/Auth/FinishRegistration'
import Registration from '../../../containers/Auth/Registration'
import ConfirmEmail from '../../../containers/Auth/ConfirmEmail'
import AsyncDashboard from '../../../containers/Pages/Dashboard/AsyncDashboard'
import AsyncShop from '../../../containers/Pages/Shop/AsyncShop'
import AsyncGames from '../../../containers/Pages/Games/AsyncGames'
import AsyncGame from '../../../containers/Pages/Game/AsyncGame'
import AsyncStream from '../../../containers/Pages/Stream/AsyncStream'
import AsyncSkins from '../../../containers/Pages/Skins/AsyncSkins'
import AsyncVchange from '../../../containers/Pages/Vchange/AsyncVchange'
import AsyncCases from '../../../containers/Pages/Cases/AsyncCases'
import AsyncCase from '../../../containers/Pages/Case/AsyncCase'
import AsyncFriends from '../../../containers/Pages/Friends/AsyncFriends'
import AsyncSettings from '../../../containers/Pages/Settings/AsyncSettings'

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

      {!secretKey && <Route path={`/login`} component={Authorization} />}

      {!secretKey && (
        <Route path={`/finish-registration`} component={FinishRegistration} />
      )}

      {!secretKey && <Route path={`/registration`} component={Registration} />}

      {!secretKey && (
        <Route path={`/confirmation-email`} component={ConfirmEmail} />
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
