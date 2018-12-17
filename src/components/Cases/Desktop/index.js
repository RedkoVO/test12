import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation/Desktop/AsyncMenuNavigation'
import Header from '../../../containers/Header/AsyncHeader'
import Footer from '../../Footer/Desktop/'
import CasesFilter from './components/CasesFilter'
import CasesList from './components/CasesList'

import styles from './styles'

const Cases = ({ classes, handleLogout, cases }) => (
  <div className="mainWrapperTrade">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerSkins}>
          <MenuNavigation type="main" page="dark" handleLogout={handleLogout} />
          <Header type="catalog" />
        </header>
        <main className={classes.cases}>
          <CasesFilter />
          <CasesList cases={cases} />
        </main>
      </div>
    </div>
    <Footer />
  </div>
)

Cases.propTypes = {
  classes: PropTypes.object,
  cases: PropTypes.array
}

export default withStyles(styles)(Cases)
