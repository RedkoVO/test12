import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import MenuNavigation from '../components/MenuNavigation'
import Main from '../components/Main'

import styles from './styles'

const Header = ({ classes }) => (
  <header className={classes.root}>
    <MenuNavigation />

    <Main />
  </header>
)

Header.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Header)