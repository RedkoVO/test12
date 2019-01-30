import { createSelector } from 'reselect'

const getTransactionHistory = state => state.history.transactionHistory

export const getTransactionHistorySelector = createSelector(
  getTransactionHistory,
  transactionHistory => transactionHistory
)
