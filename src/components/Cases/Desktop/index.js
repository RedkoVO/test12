import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import Header from '../../../containers/Header/AsyncHeader'
import Footer from '../../Footer/Desktop/'

import styles from './styles'

const Cases = ({ classes, handleLogout }) => (
  <div className="mainWrapperTrade">
    <div className="containerTradeWrap">
      <div className="containerTrade">
        <header className={classes.headerSkins}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <Header type="catalog" />
        </header>

        {/* <main className={classes.tradeMain}>

        </main> */}
      </div>
    </div>

    <Footer />
  </div>
)

Cases.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Cases)
