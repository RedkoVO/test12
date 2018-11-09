import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../../assets/images/user.png'

import styles from './styles'

const UserBlock = ({ classes, balance }) => (
  <div className={classes.root}>
    <div className={classes.demoTitle}>
      DEMO VERSION
    </div>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        <p className={classes.userHello}> Hello, Ben A <br />
          <span className={classes.userVerification}>KYC VERIFICATED</span>
        </p>
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
        <p className={classes.userBallance}>{balance} dcb<br />
          <span className={classes.userBallDescr}>YOUR BALANCE</span>
        </p>
      </div>
    </div>
  </div>
)

UserBlock.propTypes = {
  classes: PropTypes.object,
  balance: PropTypes.string
}

export default withStyles(styles)(UserBlock)