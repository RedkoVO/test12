import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, lifecycle, pure } from 'recompose'

import { getBalance } from '../../redux/actions/balance'
import { resetApp } from '../../redux/actions/appReset'
import { getBalanceSelector } from '../../selectors/balance'

import Crypto from '../../crypto/crypto'
import { clearStorageForLogout } from '../../utils/localStorageUtils'

import AsyncHeaderDesktop from '../../components/Header/Desktop'

const mapStateToProps = state => ({
  balance: getBalanceSelector(state)
})

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const isSecretKey = localStorage.getItem('secretKey')
      const getCryptoInfo = Crypto.account.accountFromSecret(isSecretKey)

      if (isSecretKey) {
        const data = {
          address: getCryptoInfo.address
        }
        this.props.dispatch(getBalance(data))
      }
    }
  }),
  withHandlers({
    handleLogout: ({ history, dispatch }) => () => {
      dispatch(resetApp())
      clearStorageForLogout()
      history.push('/')
    }
  }),
  pure
)(AsyncHeaderDesktop)
