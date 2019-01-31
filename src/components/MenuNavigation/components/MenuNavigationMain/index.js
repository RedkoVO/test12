import React from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const MenuNavigation = ({ classes, page, handleLogout }) => (
  <ul className={cn(classes.root, { dark: page === 'dark' })}>
    <li className={classes.logo}>
      {/* <img src={HouseLogo} alt="" /> */}
      <div className={classes.logout} onClick={() => handleLogout()}>
        Logout
      </div>
    </li>
    <li>
      <NavLink
        exact
        smooth
        to={'/'}
        className={classes.headerMenuItem}
        activeClassName="active"
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
      >
        <i className={cn(classes.menuIcon, classes.walletIcon)} />
        <br /> Wallet
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/games'}
        className={classes.headerMenuItem}
        activeClassName="active"
      >
        <i className={cn(classes.menuIcon, classes.games)} />
        <br /> Games
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/#apps'}
        className={classes.headerMenuItem}
        activeClassName="active"
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
      >
        <i className={cn(classes.menuIcon, classes.shop)} />
        <br /> Apps
      </NavLink>
    </li>
    <li>
      <NavLink
        smooth
        to={'/#shop'}
        className={classes.headerMenuItem}
        activeClassName="active"
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
      >
        <i className={cn(classes.menuIcon, classes.shop)} />
        <br /> Shop
      </NavLink>
    </li>
    <li>
      <NavLink
        smooth
        to={'/#contacts'}
        className={classes.headerMenuItem}
        activeClassName="active"
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
      >
        <i className={cn(classes.menuIcon, classes.friends)} />
        <br /> Contacts
      </NavLink>
    </li>
    <li>
      <NavLink
        to={'/#setting'}
        className={classes.headerMenuItem}
        activeClassName="active"
        location={{
          pathname: document.location.pathname + document.location.hash
        }}
      >
        <i className={cn(classes.menuIcon, classes.settings)} />
        <br /> Settings
      </NavLink>
    </li>
  </ul>
)

MenuNavigation.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.string,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(MenuNavigation)
