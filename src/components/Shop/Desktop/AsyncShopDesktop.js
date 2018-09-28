import Async from '../../Async'

export const AsyncShopDesktop = Async({
  loader: () => import(/* webpackChunkName: "shop_desktop" */ './index')
})

export default AsyncShopDesktop
