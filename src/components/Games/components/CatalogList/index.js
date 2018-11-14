import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import CatalogItem from './components/CatalogItem'

import styles from './styles'

const CatalogList = ({ classes, games = [] }) => (
  <main>
    <div className={classes.catalogList}>
      {games.map(item => (
        <CatalogItem game={item} key={item.id} />
      ))}
    </div>
  </main>
)

CatalogList.propTypes = {
  classes: PropTypes.object,
  games: PropTypes.array
}

export default withStyles(styles)(CatalogList)