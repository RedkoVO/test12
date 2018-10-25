import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../../MenuNavigation'
import Main from '../components/Main'

import styles from './styles'

const Header = props => {
  const { classes, onSubmit, balance, handleLogout, isDisabledButton } = props

  return (
    <header className={classes.root}>
      <MenuNavigation handleLogout={handleLogout} />
      <Main
        onSubmit={onSubmit}
        isDisabledButton={isDisabledButton}
        balance={balance && balance.shortBalance}
      />
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  handleLogout: PropTypes.func,
  balance: PropTypes.object,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Header)