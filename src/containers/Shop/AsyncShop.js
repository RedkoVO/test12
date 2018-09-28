import Async from '../../components/Async'

export const AsyncShop = Async({
  loader: () => import(/* webpackChunkName: "shop_page" */ './index')
})

export default AsyncShop
