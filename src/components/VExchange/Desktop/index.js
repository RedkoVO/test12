import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import VExchangeIcon from '../../../assets/images/exchange_page.png'

import styles from './styles'

const VExchange = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.exchangeMock} src={VExchangeIcon} alt="" />
  </div>
)

VExchange.propTypes = {}

export default withStyles(styles)(VExchange)
