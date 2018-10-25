import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, lifecycle, pure } from 'recompose'
import { reduxForm, reset } from 'redux-form'
import validate from './validate'
import BigNumber from 'bignumber.js'

import { getWork, getBalance, sendMoney } from '../../redux/actions/balance'

import Crypto from '../../crypto/crypto'

import { getBigNumberAmount } from '../../utils/math'
import { clearStorageForlogout } from '../../utils/localStorageUtils'

import AsyncHeaderDesktop from '../../components/Header/Desktop/AsyncHeaderDesktop'

const mapStateToProps = state => ({
  balance: state.balance
})

const FORM_NAME = 'sendMoney'

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
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withHandlers({
    handleLogout: ({ history }) => () => {
      clearStorageForlogout()
      history.push('/')
    },

    onSubmit: ({ handleSubmit, setDisabledButton, isDisabledButton, dispatch, balance }) =>
      handleSubmit(variables => {
        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          dispatch(getWork({ hash: localStorage.getItem('lastBlock') }))
            .then(res => {
              const acc = {
                publicKey: localStorage.getItem('publicKey'),
                secretKey: localStorage.getItem('secretKey'),
                address: localStorage.getItem('address'),
                representative: localStorage.getItem('representative'),
                lastBlock: localStorage.getItem('lastBlock'),
                balance: new BigNumber(balance.balance),
              }
              const toAddress = variables.addressKey
              const amount = getBigNumberAmount(variables.amount)
              const work = res.work
              const getCryptoBlock = Crypto.sign.formSendBlock(acc, toAddress, amount, work)

              /* TODO: WORKEROUND  remove this! */
              // getCryptoBlock.account = 'xrb' + getCryptoBlock.account.slice(3)
              // getCryptoBlock.representative = 'xrb' + getCryptoBlock.representative.slice(3)

              const data = {
                block: JSON.stringify(getCryptoBlock)
              }

              dispatch(sendMoney(data))
                .then(res => {
                  if (res.hash) {
                    const isSecretKey = localStorage.getItem("secretKey")
                    const getCryptoInfo = Crypto.account.accountFromSecret(isSecretKey)

                    if (isSecretKey) {
                      const data = {
                        address: getCryptoInfo.address
                      }
                      dispatch(getBalance(data))
                    }

                    localStorage.setItem('lastBlock', res.hash)
                    dispatch(reset('sendMoney'))
                  }

                })
                .catch(err => {
                  console.log('err registration:', err)
                })
            })
            .catch(err => {
              console.log('err registration:', err)
            })
        }
      })
  }),
  pure
)(AsyncHeaderDesktop)