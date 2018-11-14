import Async from '../../../../App/components/Async'

export const AsyncFiltersMobile = Async({
  loader: () => import(/* webpackChunkName: "filters_mobile" */ './index')
})

export default AsyncFiltersMobile
