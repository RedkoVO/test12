import axios from 'axios'

import {
  GET_ALL_BALANCE_INFO,
  GET_WORK,
  POST_PENDING,
  SEND_MONEY
} from './types'
import gC from '../../constants'

/* GET ALL BALANCE INFO */
export const getAllBalanceInfo = data => {
  data.action = 'allBalanceInfo'

  return (dispatch, getState) => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/all_balance_info/`
    })
      .then(response => {
        const { config } = getState()

        dispatch(createGetAllBalanceInfoSuccess(response.data, config))

        return {
          success: response.data.success,
          result: response.data.result,
          customAllBalance: createGetAllBalanceInfoSuccess(
            response.data,
            config
          ).payload.result
        }
      })
      .catch(error => {
        console.log('GET_ALL_BALANCE_INFO error', error)
      })
  }
}

export const createGetAllBalanceInfoSuccess = (data, { config }) => {
  const dataResult = data.result
  const configResult = config.result.balances
  const resultCollection = {}

  Object.keys(configResult).forEach(objectKey => {
    resultCollection[objectKey] = configResult[objectKey]
    resultCollection[objectKey].currency = objectKey

    dataResult.forEach(item => {
      if (item.currency === objectKey) {
        resultCollection[objectKey] = item
        resultCollection[objectKey].code = configResult[objectKey].code
      }
    })
  })

  return {
    type: GET_ALL_BALANCE_INFO,
    payload: {
      result: resultCollection,
      success: data.success
    }
  }
}
/* ********** */

/* GET WORK */
export const getWork = data => {
  data.action = 'work'

  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/work/`
    })
      .then(response => {
        dispatch(createGetWorkSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('GET_WORK error', error)
      })
  }
}

export const createGetWorkSuccess = data => {
  return {
    type: GET_WORK,
    payload: {
      success: data.success
    }
  }
}
/* ********** */

/* POST PENDING */
/*TODO: rename Incoming to addressPending */
export const postPending = data => {
  data.action = 'addressPending'

  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/pending/`
    })
      .then(response => {
        dispatch(createPostPendingSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('POST_PENDING error', error)
      })
  }
}

export const createPostPendingSuccess = data => {
  return {
    type: POST_PENDING,
    payload: {
      blocks: data.blocks
    }
  }
}
/* ********** */

/* SEND MONEY */
export const sendMoney = data => {
  data.action = 'blockPublish'

  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/submit/`
    })
      .then(response => {
        dispatch(createSendMoneySuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('SEND_MONEY error', error)
      })
  }
}

export const createSendMoneySuccess = data => {
  return {
    type: SEND_MONEY,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
