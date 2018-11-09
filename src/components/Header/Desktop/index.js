import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import UserBlock from '../components/UserBlock'

import styles from './styles'

const Header = props => {
  const { classes, balance, handleLogout } = props

  return (
    <header className={classes.root}>
      <MenuNavigation handleLogout={handleLogout} />
      <UserBlock
        balance={balance && balance.shortBalance}
      />
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
  handleLogout: PropTypes.func,
  balance: PropTypes.object
}

export default withStyles(styles)(Header)