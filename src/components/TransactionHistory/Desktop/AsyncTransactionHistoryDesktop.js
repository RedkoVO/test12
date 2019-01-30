import Async from '../../App/components/Async'

export const AsyncTransactionHistoryDesktop = Async({
  loader: () =>
    import(/* webpackChunkName: "Transaction_history_desktop" */ './index')
})

export default AsyncTransactionHistoryDesktop
