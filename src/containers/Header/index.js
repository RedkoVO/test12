import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, pure } from 'recompose'

import { resetApp } from '../../redux/actions/appReset'
import { getAllBalanceInfoSelector } from '../../selectors/balance'

import { clearStorageForLogout } from '../../utils/localStorageUtils'

import AsyncHeaderDesktop from '../../components/Header/Desktop'

const mapStateToProps = state => ({
  balance: getAllBalanceInfoSelector(state)
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleLogout: ({ history, dispatch }) => () => {
      dispatch(resetApp())
      clearStorageForLogout()
      history.push('/')
    }
  }),
  pure
)(AsyncHeaderDesktop)
