import compose from 'recompose/compose'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'
import BigNumber from 'bignumber.js'

import { sendMoney } from '../../redux/actions/auth'
import { getWork } from '../../redux/actions/balance'

import Crypto from '../../crypto/crypto'

import { getBigNumberAmount } from '../../utils/math'

import AsyncHeaderDesktop from '../../components/Header/Desktop/AsyncHeaderDesktop'

const FORM_NAME = 'sendMoney'

export default compose(
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch }) =>
      handleSubmit(variables => {
        

        dispatch(getWork({ hash: localStorage.getItem('lastBlock') }))
          .then(res => {
            const acc = {
              publicKey: localStorage.getItem('publicKey'),
              secretKey: localStorage.getItem('secretKey'),
              address: localStorage.getItem('address'),
              representative: localStorage.getItem('representative'),
              lastBlock: localStorage.getItem('lastBlock'),
              balance: new BigNumber('100000000000000000000000000000000000000'),
            }
            const toAddress = variables.addressKey
            const amount = getBigNumberAmount(variables.amount)
            const work = res.work
            const getCryptoBlock = Crypto.sign.formSendBlock(acc, toAddress, amount, work)
            
            /* TODO: WORKEROUND  remove this! */
            getCryptoBlock.account = 'xrb' + getCryptoBlock.account.slice(3)
            getCryptoBlock.representative = 'xrb' + getCryptoBlock.representative.slice(3)

            const data = {
              block: JSON.stringify(getCryptoBlock)
            }

            dispatch(sendMoney(data))
              .then(res => {
                console.log('res', res)
                if (res.hash) {
                  // update balance
                  localStorage.setItem('lastBlock', res.hash)
                }
                
              })
              .catch(err => {
                console.log('err registration:', err)
              })
          })
          .catch(err => {
            console.log('err registration:', err)
          })


      })
  })
)(AsyncHeaderDesktop)