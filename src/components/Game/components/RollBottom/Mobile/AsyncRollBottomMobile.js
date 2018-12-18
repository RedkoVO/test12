import Async from '../../../../App/components/Async'

export const AsyncRollBottomMobile = Async({
  loader: () => import(/* webpackChunkName: "roll_bottom_mobile" */ './index')
})

export default AsyncRollBottomMobile
