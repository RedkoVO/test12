import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, withProps, pure } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'
import BigNumber from 'bignumber.js'
import { sequential } from '../../../utils/promiseSequential'

import { getBalance, getIncoming } from '../../../redux/actions/balance'
import { getBalanceSelector } from '../../../selectors/balance'
import { receiveFromFaucet } from '../../../requests/receiveFromFaucet'
import Crypto from '../../../crypto/crypto'

import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

const FORM_NAME = 'registration'

const mapStateToProps = state => ({
  balance: getBalanceSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withHandlers({
    onSubmit: ({
      handleSubmit,
      history,
      dispatch,
      isDisabledButton,
      setDisabledButton
    }) =>
      handleSubmit(variables => {
        const isSecretKey = localStorage.getItem('secretKey')
        const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)

        /* TODO: refactor !!! */
        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          if (!isSecretKey) {
            const data = {
              address: getCryptoInfo.address
            }

            dispatch(getBalance(data))
              .then(res => {
                if (!res.error) {
                  localStorage.setItem('address', getCryptoInfo.address)
                  localStorage.setItem('publicKey', getCryptoInfo.publicKey)
                  localStorage.setItem(
                    'representative',
                    getCryptoInfo.representative
                  )
                  localStorage.setItem('secretKey', getCryptoInfo.secretKey)
                  localStorage.setItem('lastBlock', res.lastBlock)

                  const dataForIncoming = {
                    address: localStorage.getItem('address')
                  }
                  dispatch(getIncoming(dataForIncoming))
                    .then(blocks => {
                      const requestsArr = []
                      let userAccount = {
                        publicKey: localStorage.getItem('publicKey'),
                        secretKey: localStorage.getItem('secretKey'),
                        address: localStorage.getItem('address'),
                        representative: localStorage.getItem('representative'),
                        lastBlock: localStorage.getItem('lastBlock'),
                        balance: new BigNumber(res.balance)
                      }

                      Object.keys(blocks.blocks).forEach(hash => {
                        const sourceBlockHash = hash
                        const amountStr = blocks.blocks[hash].amount

                        requestsArr.push(() =>
                          receiveFromFaucet(
                            userAccount,
                            sourceBlockHash,
                            amountStr
                          )
                        )
                      })

                      sequential(requestsArr).then(() => {
                        dispatch(getBalance(data))
                          .then(() => {
                            history.push('/')
                          })
                          .catch(err => {
                            console.log('ERROR getBalance inside incoming', err)
                          })
                      })
                    })
                    .catch(err => {
                      console.log('Error get incoming', err)
                    })
                }
              })
              .catch(err => {
                console.log('Error get balance', err)
              })
          }
        }
      })
  }),
  withProps(() => ({ test_name: 'Authorization' })),
  pure
)(AsyncAuthorizationDesktop)
