import Async from '../../../../App/components/Async'

export const AsyncFiltersDesktop = Async({
  loader: () => import(/* webpackChunkName: "filters_desktop" */ './index')
})

export default AsyncFiltersDesktop
