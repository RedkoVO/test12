import Async from '../../App/components/Async'

export const AsyncMenuNavigationDesktop = Async({
  loader: () => import(/* webpackChunkName: "menu_navigation_desktop" */ './index')
})

export default AsyncMenuNavigationDesktop
