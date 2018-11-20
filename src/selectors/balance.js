import { createSelector } from 'reselect'

const getBalance = state => state.balance.balance

export const getBalanceSelector = createSelector(
  getBalance,
  balance => balance
)
