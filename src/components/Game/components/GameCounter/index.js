import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const GameCounter = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.counterWins}>
      <p className={classes.counterBiggestWin}>
        <span className={classes.counterValue}>4666.78 dcb</span> <br /> BIGGEST
        WIN <br /> FOR ALL TIME
      </p>
    </div>
    <div className={classes.counterHours}>
      <p className={classes.counterHoursVolume}>
        <span className={classes.counterValue}>167.12 dcb</span> <br /> VOLUME
        OF <br />
        24 HOURS
      </p>
    </div>
    <div className={classes.counterUsers}>
      <p className={classes.counterUsersVolume}>
        <span className={classes.counterValue}>785</span> <br /> USERS FOR <br />
        LAST 24 HOURS
      </p>
    </div>
    <div className={classes.counterContracts}>
      <p className={classes.counterContractsVolume}>
        <span className={classes.counterValue}>20243.12 dcb</span> <br /> ALL
        VOLUME OF <br /> SMART CONTRACT
      </p>
      <br />
      <Link to="/" className={classes.counterContractsLink}>
        0x7fdcd2a1e52f10c28cb7732f46393e297ecadda1
      </Link>
    </div>
  </div>
)

GameCounter.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(GameCounter)
