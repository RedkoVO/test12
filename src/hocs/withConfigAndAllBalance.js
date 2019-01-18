import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import Crypto from '../crypto/crypto'

import { getConfig } from '../redux/actions/config'
import { getAllBalanceInfo } from '../redux/actions/balance'

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      const { dispatch, secretKey } = this.props

      dispatch(getConfig())
        .then(res => {
          if (res.success) {
            if (secretKey) {
              const getCryptoInfo = Crypto.account.accountFromSecret(secretKey)
              const data = {
                address: getCryptoInfo.address
              }
              dispatch(getAllBalanceInfo(data))
            }
          }
        })
        .catch(err => console.log('Error get config:', err))
    }
  })
)
