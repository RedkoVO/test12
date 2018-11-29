import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const TradeTop = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.tradeGame}>
      <div className={classes.tradeGameSelect}>Game:</div>
      <div className={classes.tradeGameItem}>
        CS:GO
      </div>
    </div>
    <div className={classes.tradeStream}>
      <div className={classes.tradeStreamTitle}>Put your steam trade url: </div>
      <div className={classes.tradeStreamUrlWrap}>
        <input
          type="text"
          className={classes.tradeStreamUrl}
          placeholder="https://steamcommunity.com/groups/dota2lounge/discussions/0/558"
        />
      </div>
    </div>
  </div>
)

TradeTop.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(TradeTop)
