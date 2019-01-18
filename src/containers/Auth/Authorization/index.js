import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState, pure } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'
import BigNumber from 'bignumber.js'

import { sequential } from '../../../utils/promiseSequential'

import withConfigAndAllBalance from '../../../hocs/withConfigAndAllBalance'

import { getAllBalanceInfo, getIncoming } from '../../../redux/actions/balance'
import { getAllBalanceInfoSelector } from '../../../selectors/balance'
import { getConfigSelector } from '../../../selectors/config'
import { receiveFromFaucet } from '../../../requests/receiveFromFaucet'
import Crypto from '../../../crypto/crypto'

import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

const FORM_NAME = 'registration'

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
  withHandlers({
    onSubmit: ({
      handleSubmit,
      history,
      dispatch,
      isDisabledButton,
      setDisabledButton,
      allBalance
    }) =>
      handleSubmit(variables => {
        const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)
        localStorage.setItem('secretKey', getCryptoInfo.secretKey)
        localStorage.setItem('address', getCryptoInfo.address)
        localStorage.setItem('publicKey', getCryptoInfo.publicKey)

        /* TODO: refactor !!! */
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

                    // Object.keys(blocks.result).forEach(hash => {
                    //   console.log('hash', hash)
                    //   const sourceBlockHash = hash
                    //   const amountStr = blocks.result[hash].amount

                    //   requestsArr.push(() =>
                    //     receiveFromFaucet(
                    //       userAccount,
                    //       sourceBlockHash,
                    //       amountStr
                    //     )
                    //   )
                    // })

                    console.log('res', res)

                    blocks.result.forEach(item => {
                      console.log('item', item)
                      // console.log('-----', res.)
                      const sourceBlockHash = item.hash
                      const amountStr = item.amount

                      requestsArr.push(() =>
                        receiveFromFaucet(
                          userAccount,
                          sourceBlockHash,
                          amountStr
                        )
                      )
                    })

                    sequential(requestsArr).then(() => {
                      dispatch(getAllBalanceInfo(data))
                        .then(res => {
                          history.push('/')

                          if (res && res.lastBlock) {
                            localStorage.setItem('lastBlock', res.lastBlock)
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
