import Async from '../../App/components/Async'

export const AsyncSkinsDesktop = Async({
  loader: () => import(/* webpackChunkName: "skins_desktop" */ './index')
})

export default AsyncSkinsDesktop
