import Async from '../../Async'

export const AsyncDashboardDesktop = Async({
  loader: () => import(/* webpackChunkName: "dashboard_desktop" */ './index')
})

export default AsyncDashboardDesktop
