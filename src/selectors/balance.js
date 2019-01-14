import { createSelector } from 'reselect'

const getAllBalanceInfo = state => state.balance.allBalance

export const getAllBalanceInfoSelector = createSelector(
  getAllBalanceInfo,
  allBalance => allBalance
)
