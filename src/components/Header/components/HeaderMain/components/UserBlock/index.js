import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../../../../assets/images/user.jpg'

import styles from './styles'

const UserBlock = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        <p className={classes.userHello}>
          Hello, anonymous <br />
          <Link to={'/'} className={classes.userVerification}>KYC VERIFICATION</Link>
        </p>
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
      </div>
    </div>
  </div>
)

UserBlock.propTypes = {
  classes: PropTypes.object,
  balance: PropTypes.string
}

export default withStyles(styles)(UserBlock)
