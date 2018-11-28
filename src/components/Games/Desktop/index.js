import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import Filters from '../components/Filters'
import CatalogList from '../components/CatalogList'
import HeaderCatalog from '../components/HeaderCatalog'

import styles from './styles.js'

const Games = ({ classes, games, handleLogout, isDesktop }) => (
  <div className="mainWrapperCatalog">
    <div className={classes.containerCatalogWrap}>
      <div className={classes.containerCatalog}>
        <header className={classes.headerCatalog}>
          <MenuNavigation page="dark" handleLogout={handleLogout} />
          <HeaderCatalog isDesktop={isDesktop} />
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
