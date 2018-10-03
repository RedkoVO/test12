import Async from '../../components/App/components/Async'

export const AsyncDashboard = Async({
  loader: () => import(/* webpackChunkName: "dashboard_page" */ './index')
})

export default AsyncDashboard
