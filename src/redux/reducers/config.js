import { GET_CONFIG } from '../actions/types'

const config = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_CONFIG:
      return {
        ...state,
        config: {
          result: payload.result,
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default config
