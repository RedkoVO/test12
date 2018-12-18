import Async from '../../../../App/components/Async'

export const AsyncRollTopDesktop = Async({
  loader: () => import(/* webpackChunkName: "roll_top_desktop" */ './index')
})

export default AsyncRollTopDesktop
