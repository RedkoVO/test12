import axios from 'axios'

import { GET_TRANSACTION_HISTORY } from './types'
import gC from '../../constants'

/* GET TRANSACTION HISTORY */
export const getTransactionHistory = (currency, address, blockhash) => {
  const data = {
    action: 'history',
    currency,
    address,
    blockhash,
    limit: gC.TRANSACTION_HISTORY_LIMIT
  }

  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/history/`
    })
      .then(response => {
        dispatch(createGetTransactionHistorySuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('GET_TRANSACTION_HISTORY error', error)
      })
  }
}

export const createGetTransactionHistorySuccess = data => {
  return {
    type: GET_TRANSACTION_HISTORY,
    payload: {
      result: data.result,
      success: data.success
    }
  }
}
/* ********** */
