import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'


import styles from './styles'

const MenuNavigation = ({ classes, page }) => (
  <ul className={cn(classes.root, { game: page === 'game' })}>
    <li className={classes.logo}>
      {/* <img src={HouseLogo} alt="" /> */}
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.dashboard)}></i><br /> Dashboard
        </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.walletIcon)}></i><br /> Wallet
        </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.shop)}></i><br /> Shop
        </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.games)}></i><br /> Games
        </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.friends)}></i><br /> Friends
        </Link>
    </li>
    <li>
      <Link to={'/'} className={classes.headerMenuItem}>
        <i className={cn(classes.menuIcon, classes.settings)}></i><br /> Settings
        </Link>
    </li>
  </ul>
)

MenuNavigation.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.string
}

export default withStyles(styles)(MenuNavigation)