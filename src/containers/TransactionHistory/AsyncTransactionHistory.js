import Async from '../../components/App/components/Async'

export const AsyncTransactionHistory = Async({
  loader: () => import(/* webpackChunkName: "Transaction_history" */ './index')
})

export default AsyncTransactionHistory
