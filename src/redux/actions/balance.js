import axios from 'axios'

import { GET_BALANCE, GET_WORK } from './types'
import gC from '../../constants'

/* GET BALANCE */
export const getBalance = data => {
  data.action = 'account_info'

  return (dispatch) => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}`
    })
      .then((response) => {
        dispatch(createGetBalanceSuccess(response.data))

        return response.data
      })
      .catch((error) => {
        console.log('GET_BALANCE error', error)
      })
  }
}

export const createGetBalanceSuccess = (data) => {
  return {
    type: GET_BALANCE,
    payload: {
      balance: data.balance,
      lastBlock: data.lastBlock,
      shortBalance: data.shortBalance
    }
  }
}
/* ********** */

/* GET WORK */
export const getWork = data => {
  data.action = 'work'

  return (dispatch) => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}`
    })
      .then((response) => {
        dispatch(createGetWorkSuccess(response.data))

        return response.data
      })
      .catch((error) => {
        console.log('GET_WORK error', error)
      })
  }
}

export const createGetWorkSuccess = (data) => {
  return {
    type: GET_WORK,
    payload: {
      success: data.success
    }
  }
}
/* ********** */