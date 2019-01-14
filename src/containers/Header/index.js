import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, lifecycle, pure } from 'recompose'

import { getAllBalanceInfo } from '../../redux/actions/balance'
import { getConfig } from '../../redux/actions/config'
import { resetApp } from '../../redux/actions/appReset'
import { getAllBalanceInfoSelector } from '../../selectors/balance'

import Crypto from '../../crypto/crypto'
import { clearStorageForLogout } from '../../utils/localStorageUtils'

import AsyncHeaderDesktop from '../../components/Header/Desktop'

const mapStateToProps = state => ({
  balance: getAllBalanceInfoSelector(state)
})

export default compose(
  connect(mapStateToProps),
  // lifecycle({
  //   componentDidMount() {
  //     const { dispatch } = this.props
  //     const isSecretKey = localStorage.getItem('secretKey')
  //     const getCryptoInfo = Crypto.account.accountFromSecret(isSecretKey)

  //     if (isSecretKey) {
  //       const data = {
  //         address: getCryptoInfo.address
  //       }

  //       // dispatch(getAllBalanceInfo(data))
  //       // dispatch(getConfig())
  //       //   .then(res => {
  //       //     if (res.success) {
  //       //       dispatch(getAllBalanceInfo(data))
  //       //     }
  //       //   })
  //       //   .catch(err => console.log('Error get config:', err))
  //     }
  //   }
  // }),
  withHandlers({
    handleLogout: ({ history, dispatch }) => () => {
      dispatch(resetApp())
      clearStorageForLogout()
      history.push('/')
    }
  }),
  pure
)(AsyncHeaderDesktop)
