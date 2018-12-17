import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const MenuNavigationGame = ({ classes, page, handleLogout }) => (
  <ul className={cn(classes.root, { dark: page === 'dark' })}>
    <li className={classes.logo}>
      {/* <img src={HouseLogo} alt="" /> */}
      <div className={classes.logout} onClick={() => handleLogout()}>
        Logout
      </div>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.dashboard)} />
        <br /> Dashboard
      </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.walletIcon)} />
        <br /> Wallet
      </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.shop)} />
        <br /> Shop
      </Link>
    </li>
    <li>
      <Link to={'/games'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.games)} />
        <br /> Games
      </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.friends)} />
        <br /> Friends
      </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.settings)} />
        <br /> Settings
      </Link>
    </li>
  </ul>
)

MenuNavigationGame.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.string,
  handleLogout: PropTypes.func
}

export default withStyles(styles)(MenuNavigationGame)
