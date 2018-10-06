import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Dashboard = ({ classes }) => (
  <div className={classes.root}>
    <header className={classes.appHeader}>
      <h1 className={classes.appTitle}>Welcome to React</h1>
    </header>
    <p className={classes.appIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

Dashboard.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Dashboard)