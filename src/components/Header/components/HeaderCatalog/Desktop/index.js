import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import UserImg from '../../../../../assets/images/user.jpg'

import styles from './styles'

const HeaderCatalog = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.streamUserBlock}>
      <p className={classes.streamUserHello}>
        Hello, Ben A <br />
        <Link to={'/'} className={classes.streamUserVerification}>
          KYC VERIFICATION
        </Link>
      </p>
      <div className={classes.streamUserPhoto}>
        <img src={UserImg} alt="" />
      </div>
    </div>
  </div>
)

HeaderCatalog.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(HeaderCatalog)
