import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../assets/images/user.png'

import styles from './styles'

const HeaderStream = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.streamUserBlock}>
      <p className={classes.streamUserHello}> Hello, Ben A <br />
        <span className={classes.streamUserVerification}>KYC VERIFICATED</span>
      </p>
      <div className={classes.streamUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
      <p className={classes.streamUserBallance}> 764.23 DCB <br />
        <span className={classes.streamUserBallDescr}>YOUR BALANCE</span>
      </p>
    </div>
  </div>
)

HeaderStream.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HeaderStream)