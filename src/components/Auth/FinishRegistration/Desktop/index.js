import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const FinishRegistration = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.wrFinishRegistration}>
      <div className={classes.screen}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.

        <Link to="/login" className={classes.loginBtn}>
          Login!
        </Link>
      </div>
    </div>
  </div>
)

FinishRegistration.propTypes = {
  classNamees: PropTypes.object
}

export default withStyles(styles)(FinishRegistration)
