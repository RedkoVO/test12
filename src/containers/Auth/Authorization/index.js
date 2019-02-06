import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure } from 'recompose'
import { change, reduxForm } from 'redux-form'
import validate from './validate'
import BigNumber from 'bignumber.js'

import { sequential } from '../../../utils/promiseSequential'

import withConfigAndAllBalance from '../../../hocs/withConfigAndAllBalance'

import { getAllBalanceInfo, postPending } from '../../../redux/actions/balance'
import { getAllBalanceInfoSelector } from '../../../selectors/balance'
import { getConfigSelector } from '../../../selectors/config'
import { receiveFromFaucet } from '../../../requests/receiveFromFaucet'
import Crypto from '../../../crypto/crypto'

import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

const FORM_NAME = 'authirization'

const mapStateToProps = state => ({
  allBalance: getAllBalanceInfoSelector(state),
  config: getConfigSelector(state)
})

export default compose(
  connect(mapStateToProps),
  withConfigAndAllBalance,
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withState('secretKeyFromFile', 'setSecretKeyFromFile', false),
  withHandlers({
    handleFileDropzone: ({ dispatch }) => (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length === 0) {
        const reader = new FileReader()
        reader.onloadend = () => {
          const content = reader.result
          dispatch(change(FORM_NAME, 'key', content))
        }
        reader.readAsText(acceptedFiles[0])
      }
    },
    onSubmit: ({
      handleSubmit,
      history,
      dispatch,
      isDisabledButton,
      setDisabledButton
    }) =>
      handleSubmit(variables => {
        const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)
        localStorage.setItem('secretKey', getCryptoInfo.secretKey)
        localStorage.setItem('address', getCryptoInfo.address)
        localStorage.setItem('publicKey', getCryptoInfo.publicKey)

        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          const data = {
            address: localStorage.getItem('address')
          }

          dispatch(getAllBalanceInfo(data))
            .then(res => {
              if (res.success) {
                const dataForIncoming = {
                  address: localStorage.getItem('address')
                }
                dispatch(postPending(dataForIncoming))
                  .then(blocks => {
                    const requestsArr = []
                    const currencyInfo = {}
                    let userAccount = {
                      publicKey: localStorage.getItem('publicKey'),
                      secretKey: localStorage.getItem('secretKey'),
                      address: localStorage.getItem('address')
                    }

                    const currencyInfoUpdate = (
                      currency,
                      newLastBlock,
                      newBalance
                    ) => {
                      currencyInfo[currency] = {
                        currency: currency,
                        code: res.customAllBalance[currency].code,
                        balance: newBalance
                          ? newBalance
                          : new BigNumber(
                              res.customAllBalance[currency].balance
                            ),
                        lastBlock: newLastBlock
                          ? newLastBlock
                          : res.customAllBalance[currency].lastBlock
                      }
                    }

                    blocks.result.forEach(item => {
                      const sourceBlockHash = item.hash
                      const amountStr = item.amount
                      currencyInfoUpdate(item.currency)

                      requestsArr.push(() =>
                        receiveFromFaucet(
                          userAccount,
                          sourceBlockHash,
                          amountStr,
                          currencyInfo,
                          item.currency,
                          currencyInfoUpdate
                        )
                      )
                    })

                    sequential(requestsArr).then(() => {
                      dispatch(getAllBalanceInfo(data))
                        .then(res => {
                          if (res.success) {
                            history.push('/')
                          }
                        })
                        .catch(err => {
                          console.log(
                            'ERROR getAllBalanceInfo inside incoming',
                            err
                          )
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
      })
  }),
  pure
)(AsyncAuthorizationDesktop)
