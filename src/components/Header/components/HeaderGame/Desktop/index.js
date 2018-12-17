import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../../assets/images/user.png'

import styles from './styles'

const HeaderGame = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.gameUserBlock}>
      <p className={classes.gameUserHello}>
        Hello, Ben A <br />
        <span className={classes.gameUserVerification}>KYC VERIFICATED</span>
      </p>
      <div className={classes.gameUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
      <p className={classes.gameUserBallance}>
        764.23 DCB <br />
        <span className={classes.gameUserBallDescr}>YOUR BALANCE</span>
      </p>
    </div>
  </div>
)

HeaderGame.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HeaderGame)
