import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, lifecycle, pure } from 'recompose'

import { getBalance } from '../../redux/actions/balance'

import Crypto from '../../crypto/crypto'
import { clearStorageForlogout } from '../../utils/localStorageUtils'

import AsyncHeaderDesktop from '../../components/Header/Desktop/AsyncHeaderDesktop'

const mapStateToProps = state => ({
  balance: state.balance
})

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const isSecretKey = localStorage.getItem("secretKey")
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
    handleLogout: ({ history }) => () => {
      clearStorageForlogout()
      history.push('/')
    }
  }),
  pure
)(AsyncHeaderDesktop)