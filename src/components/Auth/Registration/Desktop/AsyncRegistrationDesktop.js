import Async from '../../../Async'

export const AsyncRegistrationDesktop = Async({
  loader: () => import(/* webpackChunkName: "registration_desktop" */ './index')
})

export default AsyncRegistrationDesktop
