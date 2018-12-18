import Async from '../../../../App/components/Async'

export const AsyncRollTopMobile = Async({
  loader: () => import(/* webpackChunkName: "roll_top_mobile" */ './index')
})

export default AsyncRollTopMobile
