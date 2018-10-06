import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Action = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.actionsStatistics}>
      <span className={classes.statisticsTitle}>Statistics</span>
      <div className={classes.statisticsGraph}>
        <canvas id="cvs" width="200" height="90">
          [No canvas support]
        </canvas>
      </div>
    </div>
    <div className={classes.actionsSend}>
      <span className={classes.sendTitle}>Send now</span>
      <div className={classes.sendAddress}>
        <input type="text" className={classes.sendAddressField} placeholder="Put address you want to send the money" />
      </div>
      <div className={classes.sendAmmount}>
        <input type="text" className={classes.sendAmmountField} placeholder="Set ammount" />
      </div>
      <a href="/" className={classes.sendBtn}>Send money</a>
    </div>
    <div className={classes.actionsInvoice}>
      <span className={classes.invoiceTitle}>Invoice</span>
      <div className={classes.invoiceAmmount}>
        <input type="text" className={classes.invoiceAmmountField} placeholder="Set ammount you need to receive" />
      </div>
      <a href="/" className={classes.invoiceBtn}>Generate link</a>
    </div>
  </div>
)

Action.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Action)