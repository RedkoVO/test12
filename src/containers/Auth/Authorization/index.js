import compose from 'recompose/compose'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'

import { getBalance } from '../../../redux/actions/balance'

import Crypto from '../../../crypto/crypto'

import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

const FORM_NAME = 'registration'

export default compose(
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit, history, dispatch }) =>
      handleSubmit(variables => {
        const isSecretKey = localStorage.getItem("secretKey")
        const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)

        if (!isSecretKey) {
          const data = {
            address: getCryptoInfo.address
          }
          
          dispatch(getBalance(data))
          .then(res => {
            localStorage.setItem("address", getCryptoInfo.address)
            localStorage.setItem("publicKey", getCryptoInfo.publicKey)
            localStorage.setItem("representative", getCryptoInfo.representative)
            localStorage.setItem("secretKey", getCryptoInfo.secretKey)
            localStorage.setItem("lastBlock", res.lastBlock)

            history.push('/')

            console.log('res balance', res)
          })
          .catch(err => {
            console.log('Error get balance', err)
          })
        }
      })
  })
)(AsyncAuthorizationDesktop)


