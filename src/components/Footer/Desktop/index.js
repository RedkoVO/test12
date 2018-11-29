import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './styles'

const Footer = ({ classes }) => (
  <footer className={classes.root}>
    <ul className={classes.footerNav}>
      <li>
        <Link to="/" className={classes.footerNavItem}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/" className={classes.footerNavItem}>
          Wallet
        </Link>
      </li>
      <li>
        <Link to="/" className={classes.footerNavItem}>
          Shop
        </Link>
      </li>
      <li>
        <Link to="/games" className={classes.footerNavItem}>
          Games
        </Link>
      </li>
      <li>
        <Link to="/" className={classes.footerNavItem}>
          Friends
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={cn(classes.footerNavItem, classes.footerNavSettings)}
        >
          Settings
        </Link>
      </li>
    </ul>
    <span className={classes.copyrightGameFooter}>
      Vault. All Rights Reserved 2018
    </span>
  </footer>
)

Footer.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Footer)
