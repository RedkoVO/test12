import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation/Desktop/AsyncMenuNavigation'
import Filters from '../components/Filters'
import CatalogList from '../components/CatalogList'
import Header from '../../../containers/Header/AsyncHeader'

import styles from './styles.js'

const Games = ({ classes, games, handleLogout, isDesktop }) => (
  <div className="mainWrapperCatalog">
    <div className={classes.containerCatalogWrap}>
      <div className={classes.containerCatalog}>
        <header className={classes.headerCatalog}>
          <MenuNavigation type="main" page="dark" handleLogout={handleLogout} />
          <Header type="games">{isDesktop && <Filters />}</Header>

          {!isDesktop && <Filters />}
        </header>

        <CatalogList games={games} />
      </div>
    </div>
  </div>
)

Games.propTypes = {
  classes: PropTypes.object,
  games: PropTypes.array,
  handleLogout: PropTypes.func,
  isDesktop: PropTypes.bool
}

export default withStyles(styles)(Games)
