import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Friends = ({ classes }) => (
  <div className={classes.root}>
    Friends
  </div>
)

export default withStyles(styles)(Friends)