import React from 'react'
// import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const PricesBuy = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.title}>
      <span>Buy</span> BTC: Prices
    </div>
  </div>
)

PricesBuy.propTypes = {}

export default withStyles(styles)(PricesBuy)
