import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import Header from '../../../containers/Header/AsyncHeader'
import Footer from '../../Footer/Desktop/'
import CaseFilter from './components/CaseFilter'
import CaseOpen from './components/CaseOpen'
import CasesRelated from './components/CasesRelated'

import styles from './styles'

const Case = ({ classes, handleLogout, caseItems, relaredItems }) => (
  <div className="mainWrapperTrade">
    <div className={classes.containerTradeWrap}>
      <div className={classes.containerTrade}>
        <header className={classes.headerCase}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <Header type="catalog" />
        </header>
        <main className={classes.case}>
          {/* TODO: Similar like Cases component */}
          <CaseFilter />
          <CaseOpen caseItems={caseItems} />
          <CasesRelated relaredItems={relaredItems} />
        </main>
      </div>
    </div>
    <Footer />
  </div>
)

Case.propTypes = {
  classes: PropTypes.object,
  caseItems: PropTypes.array,
  relaredItems: PropTypes.array
}

export default withStyles(styles)(Case)
