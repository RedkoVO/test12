import { GET_BALANCE, GET_WORK } from '../actions/types'

const auth = (state = {}, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_BALANCE:
      return {
        ...state,
        balance: payload.balance,
        lastBlock: payload.lastBlock,
        shortBalance: payload.shortBalance
      }
    case GET_WORK:
      return {
        ...state,
        getWork: {
          success: payload.success
        }
      }
    default:
      return state
  }
}

export default auth