import {
  GET_ALL_BALANCE_INFO,
  GET_WORK,
  POST_PENDING,
  SEND_MONEY
} from '../actions/types'

const balance = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_ALL_BALANCE_INFO:
      return {
        ...state,
        allBalance: {
          result: payload.result,
          success: payload.success
        }
      }
    case GET_WORK:
      return {
        ...state,
        getWork: {
          success: payload.success
        }
      }
    case POST_PENDING:
      return {
        ...state,
        postPending: {
          blocks: payload.blocks
        }
      }
    case SEND_MONEY:
      return {
        ...state,
        sendMoneyResponse: {
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default balance
