import Async from '../../App/components/Async'

export const AsyncShopDesktop = Async({
  loader: () => import(/* webpackChunkName: "shop_desktop" */ './index')
})

export default AsyncShopDesktop
