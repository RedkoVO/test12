import axios from 'axios'

import { REGISTRATION_USER, SEND_MONEY, GET_INCOMING } from './types'
import gC from '../../constants'

/* REGISTRATION */
export const registrationEmail = data => {
  data.action = 'registration'

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
        dispatch(createRegistrationEmailSuccess(response.data))

        return response.data
      })
      .catch((error) => {
        console.log('REGISTRATION_USER error', error)
      })
  }
}

export const createRegistrationEmailSuccess = (data) => {
  return {
    type: REGISTRATION_USER,
    payload: {
      success: data.success
    }
  }
}
/* ********** */

/* TODO: move to another file */
/* SEND MONEY */
export const sendMoney = data => {
  data.action = 'submit'

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
        dispatch(createSendMoneySuccess(response.data))

        return response.data
      })
      .catch((error) => {
        console.log('SEND_MONEY error', error)
      })
  }
}

export const createSendMoneySuccess = (data) => {
  return {
    type: SEND_MONEY,
    payload: {
      success: data.success
    }
  }
}
/* ********** */
