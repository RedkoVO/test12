import React from 'react'
import PropTypes from 'prop-types'

import HeaderMain from '../components/HeaderMain/Desktop'
import HeaderCatalog from '../components/HeaderCatalog/Desktop'
import HeaderGames from '../components/HeaderGames/Desktop'

const Header = ({ type, children, handleLogout }) => (
  <React.Fragment>
    {type === 'catalog' && <HeaderCatalog handleLogout={handleLogout} />}

    {type === 'games' && <HeaderGames children={children} handleLogout={handleLogout} />}

    {type === 'main' && <HeaderMain handleLogout={handleLogout} />}
  </React.Fragment>
)

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  handleLogout:PropTypes.func
}

export default Header
