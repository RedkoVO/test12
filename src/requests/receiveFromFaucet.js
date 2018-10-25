import axios from 'axios'
import BigNumber from 'bignumber.js'

import gC from '../constants'
import Crypto from '../crypto/crypto'

export const receiveFromFaucet = async (userAccount, sourceBlockHash, amountStr) => {
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
  if (myReq.hash === '0000000000000000000000000000000000000000000000000000000000000000')
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