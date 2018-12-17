import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation/Desktop/AsyncMenuNavigation'
import HeaderCatalog from '../../../containers/Header/AsyncHeader'
import StreamBettingTop from '../components/StreamBettingTop'
import StreamScreen from '../components/StreamScreen'
import StreamDescription from '../components/StreamDescription'

import StreamTabs from '../components/StreamTabs'
import Footer from '../../Footer/Desktop'

import styles from './styles'

const Stream = ({ classes, handleLogout, isDesktop, streamLive }) => (
  <div className="containerStreamWrap">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerStream}>
          <MenuNavigation type="main" page="dark" handleLogout={handleLogout} />
          <HeaderCatalog isDesktop={isDesktop} type="catalog" />
        </header>

        <main className={classes.streamMain}>
          <StreamBettingTop />
          <StreamScreen />
          <StreamDescription />
          <StreamTabs streamLive={streamLive} />
        </main>
      </div>
    </div>
    <Footer />
  </div>
)

Stream.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  isDesktop: PropTypes.bool,
  streamLive: PropTypes.array
}

export default withStyles(styles)(Stream)
