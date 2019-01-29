import axios from 'axios'
import BigNumber from 'bignumber.js'

import gC from '../constants'
import Crypto from '../crypto/crypto'

export const receiveFromFaucet = async (
  userAccount,
  sourceBlockHash,
  amountStr,
  currencyInfo,
  currency,
  currencyInfoUpdate
) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const amount = new BigNumber(amountStr)
  // calc work
  let work

  let myReq = {}
  myReq.action = 'work'
  myReq.hash = currencyInfo[currency].lastBlock
  if (
    myReq.hash ===
    '0000000000000000000000000000000000000000000000000000000000000000'
  ) {
    myReq.hash = userAccount.publicKey // public key is source for unopened accounts
  }

  try {
    const gateResponse = await axios({
      method: 'post',
      headers: headers,
      data: myReq,
      url: `${gC.API_URL}/work/`
    })
    work = gateResponse.data.work
  } catch (error) {
    console.log(error)
    return { error: error }
  }

  // form block and receive
  const receiveBlock = Crypto.sign.formReceiveBlock(
    userAccount,
    sourceBlockHash,
    amount,
    work,
    currencyInfo[currency]
  )

  myReq = {}
  myReq.action = 'blockPublish'
  myReq.block = receiveBlock

  try {
    const gateResponse = await axios({
      method: 'post',
      headers: headers,
      data: myReq,
      url: `${gC.API_URL}/submit/`
    })

    //update last block and balance if all good
    if (gateResponse.data.success) {
      const hash = gateResponse.data.result.hash
      const balance = currencyInfo[currency].balance.plus(amount)

      currencyInfoUpdate(currency, hash, balance)
    }
    return gateResponse
  } catch (error) {
    console.log(error)
    return { error: error }
  }
}
