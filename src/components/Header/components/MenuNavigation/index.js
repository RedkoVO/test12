import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'


import styles from './styles'

const MenuNavigation = ({ classes }) => (
    <ul className={classes.root}>
      <li className={classes.logo}>
        {/* <img src={HouseLogo} alt="" /> */}
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.dashboard)}></i><br /> Dashboard
        </a>
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.walletIcon)}></i><br /> Wallet
        </a>
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.shop)}></i><br /> Shop
        </a>
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.games)}></i><br /> Games
        </a>
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.friends)}></i><br /> Friends
        </a>
      </li>
      <li>
        <a href="/" className={classes.headerMenuItem}>
          <i className={cn(classes.menuIcon, classes.settings)}></i><br /> Settings
        </a>
      </li>
    </ul>
)

MenuNavigation.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(MenuNavigation)