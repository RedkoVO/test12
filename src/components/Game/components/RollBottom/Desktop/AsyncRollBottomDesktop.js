import Async from '../../../../App/components/Async'

export const AsyncRollBottomDesktop = Async({
  loader: () => import(/* webpackChunkName: "roll_bottom_desktop" */ './index')
})

export default AsyncRollBottomDesktop
