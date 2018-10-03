import Async from '../../components/App/components/Async'

export const AsyncWallet = Async({
  loader: () => import(/* webpackChunkName: "wallet_page" */ './index')
})

export default AsyncWallet
