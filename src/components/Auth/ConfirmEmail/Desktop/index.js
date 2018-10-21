import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const ConfirmEmail = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.message}>
      Fast registration completed. Please check your email
      <Link to="/login" className={classes.step1BtnsRegister}>Login!</Link>
    </div>

  </div>
)

ConfirmEmail.propTypes = {
  classNamees: PropTypes.object
}

export default withStyles(styles)(ConfirmEmail)