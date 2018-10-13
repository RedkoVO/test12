import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../components/MenuNavigation'
import Main from '../components/Main'

import styles from './styles'

const Header = props => {
  const { classes, onSubmit } = props

  return (
    <header className={classes.root}>
      <MenuNavigation />
      <Main
        onSubmit={onSubmit}
      />
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header)