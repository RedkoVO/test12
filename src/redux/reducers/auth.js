import { REGISTRATION_USER } from '../actions/types'

const auth = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case REGISTRATION_USER:
      return {
        ...state,
        registrationEmail: {
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default auth
