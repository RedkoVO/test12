import axios from 'axios'

import { REGISTRATION_USER } from './types'
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
      url: `${gC.API_REGISTRATION_URL}/registration/`
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
