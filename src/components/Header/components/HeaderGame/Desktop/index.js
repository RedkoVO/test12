import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import UserImg from '../../../../../assets/images/user.jpg'

import styles from './styles'

const HeaderGame = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.gameUserBlock}>
      <p className={classes.gameUserHello}>
        Hello, Ben A <br />
        <Link to={'/'} className={classes.gameUserVerification}>KYC VERIFICATION</Link>
      </p>
      <div className={classes.gameUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
    </div>
  </div>
)

HeaderGame.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HeaderGame)
