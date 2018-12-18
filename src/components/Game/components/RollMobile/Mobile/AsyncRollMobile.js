import Async from '../../../../App/components/Async'

export const AsyncRollMobile = Async({
  loader: () => import(/* webpackChunkName: "roll_mobile" */ './index')
})

export default AsyncRollMobile
