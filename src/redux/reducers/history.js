import { GET_TRANSACTION_HISTORY } from '../actions/types'

const history = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_TRANSACTION_HISTORY:
      return {
        ...state,
        transactionHistory: {
          result: payload.result,
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default history
