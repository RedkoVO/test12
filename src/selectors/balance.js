import { createSelector } from 'reselect'

const getBalance = state => state.balance

export const getBalanceSelector = createSelector(
  [getBalance],
  balance => {
    // console.log('balance selector', balance)

    return balance
  }
)
