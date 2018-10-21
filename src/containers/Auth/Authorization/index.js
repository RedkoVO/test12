import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withHandlers, withState } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'
import axios from 'axios'
import gC from '../../../constants'
import BigNumber from 'bignumber.js'

import { getBalance, getIncoming } from '../../../redux/actions/balance'

import Crypto from '../../../crypto/crypto'

import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

const FORM_NAME = 'registration'

const mapStateToProps = state => ({
  balance: state.balance
})

//userAccount - dcb_1fauckj8fjysfhoroimk6mxnocxbam7i8quwkutnzz7aecte8xb4m8k5wz46
//sourceBlockHash - 
// const acc = {
//   publicKey: localStorage.getItem('publicKey'),
//   secretKey: localStorage.getItem('secretKey'),
//   address: localStorage.getItem('address'),
//   representative: localStorage.getItem('representative'),
//   lastBlock: localStorage.getItem('lastBlock'),
//   balance: new BigNumber(balance.balance),
// }
//amountStr - "amount": "2200000000000000000000"

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState('isDisabledButton', 'setDisabledButton', false),
  withHandlers({
    onSubmit: ({ handleSubmit, history, dispatch, isDisabledButton, setDisabledButton, balance }) =>
      handleSubmit(variables => {
        const isSecretKey = localStorage.getItem("secretKey")
        const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)

        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          if (!isSecretKey) {
            const data = {
              address: getCryptoInfo.address
            }

            dispatch(getBalance(data))
              .then(res => {
                console.log('res BALANCE', res)
                if (!res.error) {
                  localStorage.setItem("address", getCryptoInfo.address)
                  localStorage.setItem("publicKey", getCryptoInfo.publicKey)
                  localStorage.setItem("representative", getCryptoInfo.representative)
                  localStorage.setItem("secretKey", getCryptoInfo.secretKey)
                  localStorage.setItem("lastBlock", res.lastBlock)

                  const dataForIncoming = { address: localStorage.getItem("address") }
                  dispatch(getIncoming(dataForIncoming))
                    .then(blocks => {
                      console.log('blocks', blocks)

                      let userAccount = {
                        publicKey: localStorage.getItem('publicKey'),
                        secretKey: localStorage.getItem('secretKey'),
                        address: localStorage.getItem('address'),
                        representative: localStorage.getItem('representative'),
                        lastBlock: localStorage.getItem('lastBlock'),
                        balance: new BigNumber(res.balance),
                      }

                      async function receiveFromFaucet(userAccount, sourceBlockHash, amountStr) {
                        console.log('Started faucet accepting money by user')

                        const headers = {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        }

                        const amount = new BigNumber(amountStr)
                        // calc work
                        let work

                        let myReq = {}
                        myReq.action = 'work'
                        myReq.hash = userAccount.lastBlock
                        if (myReq.hash == '0000000000000000000000000000000000000000000000000000000000000000')
                          myReq.hash = userAccount.publicKey // public key is source for unopened accounts
                        // console.log(myReq)

                        try {
                          const gateResponse = await axios({ method: 'post', headers: headers, data: myReq, url: `${gC.API_URL}` })
                          // console.log('gateResponse: ', gateResponse)
                          work = gateResponse.data.work
                          // console.log('work', gateResponse.data.work)
                        } catch (error) {
                          // console.log(error)
                          return { error: error }
                        }

                        // // form block and receive
                        const receiveBlock = Crypto.sign.formReceiveBlock(userAccount, sourceBlockHash, amount, work)

                        myReq = {}
                        myReq.action = 'submit'
                        myReq.block = JSON.stringify(receiveBlock)

                        console.log(myReq)

                        try {
                          const gateResponse = await axios({ method: 'post', headers: headers, data: myReq, url: `${gC.API_URL}` })
                          console.log('gateResponse: ', gateResponse)

                          //update last block and balance if all good
                          if (gateResponse.hash) {
                            userAccount.lastBlock = gateResponse.data.hash
                            userAccount.balance = new BigNumber(userAccount.balance).plus(amount)
                          }
                          return gateResponse
                        } catch (error) {
                          console.log(error)
                          return { error: error }
                        }

                        //console.log(faucetAccount)
                      }

                      Object.keys(blocks.blocks).forEach(hash => {
                        const sourceBlockHash = hash
                        const amountStr = blocks.blocks[hash].amount

                        receiveFromFaucet(userAccount, sourceBlockHash, amountStr)

                      })

                      dispatch(getBalance(data))
                        .then(() => {
                          history.push('/')
                        })
                        .catch(err => {
                          console.log('ERROR getBalance incoming', err)
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

  })
)(AsyncAuthorizationDesktop)










// async function receiveFromFaucet(userAccount, sourceBlockHash, amountStr){
//     console.log('Started faucet accepting money by user')

//     const amount = new BigNumber(amountStr)
//     // calc work
//     let work

//     let myReq = {}
//     myReq.action = 'work'
//     myReq.hash = userAccount.lastBlock
//     if (myReq.hash == '0000000000000000000000000000000000000000000000000000000000000000') 
//         myReq.hash = userAccount.publicKey // public key is source for unopened accounts
//     console.log(myReq)

//     try {
//         const gateResponse = await request({ method: 'post', uri: API_URL, body: myReq, json: true })
//         console.log('gateResponse: ', gateResponse)
//         work = gateResponse.work;
//     } catch (error) {
//         console.log(error)
//         return {error: error}
//     }

//     console.log('work', work)

//     // form block and receive
//     const receiveBlock = crypto.sign.formReceiveBlock(userAccount, sourceBlockHash, amount, work)


//     myReq = {}
//     myReq.action = 'submit'
//     myReq.block = JSON.stringify(receiveBlock)

//     console.log(myReq)

//     try {
//         const gateResponse = await request({ method: 'post', uri: API_URL, body: myReq, json: true })
//         console.log('gateResponse: ', gateResponse)

//         //update last block and balance if all good
//         if (gateResponse.hash){
//             userAccount.lastBlock = gateResponse.hash
//             userAccount.balance = new BigNumber(userAccount.balance).plus(amount)
//         }
//         return gateResponse
//     } catch (error) {
//         console.log(error)
//         return {error: error}
//     }

//     //console.log(faucetAccount)
// }










// import compose from 'recompose/compose'
// import { withHandlers, withState } from 'recompose'
// import { reduxForm } from 'redux-form'
// import validate from './validate'

// import { getBalance } from '../../../redux/actions/balance'

// import Crypto from '../../../crypto/crypto'

// import AsyncAuthorizationDesktop from '../../../components/Auth/Authorization/Desktop/AsyncAuthorizationDesktop'

// const FORM_NAME = 'registration'

// //userAccount - dcb_1fauckj8fjysfhoroimk6mxnocxbam7i8quwkutnzz7aecte8xb4m8k5wz46
// //sourceBlockHash - 
//     // const acc = {
//     //   publicKey: localStorage.getItem('publicKey'),
//     //   secretKey: localStorage.getItem('secretKey'),
//     //   address: localStorage.getItem('address'),
//     //   representative: localStorage.getItem('representative'),
//     //   lastBlock: localStorage.getItem('lastBlock'),
//     //   balance: new BigNumber(balance.balance),
//     // }
// //amountStr - "amount": "2200000000000000000000"

// export default compose(
//   reduxForm({
//     form: FORM_NAME,
//     validate
//   }),
//   withState('isDisabledButton', 'setDisabledButton', false),
//   withHandlers({
//     onSubmit: ({ handleSubmit, history, dispatch, isDisabledButton, setDisabledButton }) =>
//       handleSubmit(variables => {
//         const isSecretKey = localStorage.getItem("secretKey")
//         const getCryptoInfo = Crypto.account.accountFromSecret(variables.key)

//         if (!isDisabledButton) {
//           setDisabledButton(!isDisabledButton)

//           if (!isSecretKey) {
//             const data = {
//               address: getCryptoInfo.address
//             }

//             dispatch(getBalance(data))
//               .then(res => {
//                 if (!res.error) {
//                   localStorage.setItem("address", getCryptoInfo.address)
//                   localStorage.setItem("publicKey", getCryptoInfo.publicKey)
//                   localStorage.setItem("representative", getCryptoInfo.representative)
//                   localStorage.setItem("secretKey", getCryptoInfo.secretKey)
//                   localStorage.setItem("lastBlock", res.lastBlock)

//                   history.push('/')
//                 }
//               })
//               .catch(err => {
//                 console.log('Error get balance', err)
//               })
//           }
//         }
//       })

//   })
// )(AsyncAuthorizationDesktop)


