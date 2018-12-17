import React from 'react'
import PropTypes from 'prop-types'

import MenuNavigationMain from '../components/MenuNavigationMain'
import MenuNavigationGame from '../components/MenuNavigationGame'

const MenuNavigation = ({ page, type, handleLogout }) => (
  <React.Fragment>
    {type === 'main' && (
      <MenuNavigationMain page={page} handleLogout={handleLogout} />
    )}
    {type === 'game' && (
      <MenuNavigationGame page={page} handleLogout={handleLogout} />
    )}
  </React.Fragment>
)

MenuNavigation.propTypes = {
  classes: PropTypes.object,
  page: PropTypes.string,
  type: PropTypes.string,
  handleLogout: PropTypes.func
}

export default MenuNavigation
