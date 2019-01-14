import axios from 'axios'

import { GET_CONFIG } from './types'
import gC from '../../constants'

/* GET CONFIG */
export const getConfig = () => {
  const data = { action: 'config' }

  return dispatch => {
    return axios({
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data),
      url: `${gC.API_URL}/config/`
    })
      .then(response => {
        dispatch(createGetConfigSuccess(response.data))

        return response.data
      })
      .catch(error => {
        console.log('GET_CONFIG error', error)
      })
  }
}

export const createGetConfigSuccess = data => {
  return {
    type: GET_CONFIG,
    payload: {
      result: data.result,
      success: data.success
    }
  }
}
/* ********** */
