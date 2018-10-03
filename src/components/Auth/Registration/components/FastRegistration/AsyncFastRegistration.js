import Async from '../../../../App/components/Async'

export const AsyncFastRegistration = Async({
  loader: () => import(/* webpackChunkName: "fast_registration" */ './index')
})

export default AsyncFastRegistration
