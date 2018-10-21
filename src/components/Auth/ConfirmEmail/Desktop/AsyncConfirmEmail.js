import Async from '../../../App/components/Async'

export const AsyncConfirmEmailDesktop = Async({
  loader: () => import(/* webpackChunkName: "confirm_email_desktop" */ './index')
})

export default AsyncConfirmEmailDesktop
