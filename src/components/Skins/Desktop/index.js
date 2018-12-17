import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation/Desktop/AsyncMenuNavigation'
import Header from '../../../containers/Header/AsyncHeader'
import TradeTop from '../components/TradeTop'
import TradeSkins from '../components/TradeSkins'
import TradePayment from '../components/TradePayment'
import Footer from '../../Footer/Desktop/'

import styles from './styles'

const Skins = ({ classes, handleLogout, skins, selectedItems }) => (
  <div className="mainWrapperTrade">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerSkins}>
          <MenuNavigation type="main" page="dark" handleLogout={handleLogout} />
          <Header type="catalog" />
        </header>

        <main className={classes.tradeMain}>
          <TradeTop />
          <TradeSkins skins={skins} />
          <TradePayment selectedItems={selectedItems} />
        </main>
      </div>
    </div>

    <Footer />
  </div>
)

Skins.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  skins: PropTypes.array,
  selectedItems: PropTypes.array
}

export default withStyles(styles)(Skins)
