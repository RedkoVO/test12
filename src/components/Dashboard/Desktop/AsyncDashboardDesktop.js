import Async from '../../App/components/Async'

export const AsyncDashboardDesktop = Async({
  loader: () => import(/* webpackChunkName: "dashboard_desktop" */ './index')
})

export default AsyncDashboardDesktop
