import Async from '../../Async'

export const AsyncWalletDesktop = Async({
  loader: () => import(/* webpackChunkName: "wallet_desktop" */ './index')
})

export default AsyncWalletDesktop
