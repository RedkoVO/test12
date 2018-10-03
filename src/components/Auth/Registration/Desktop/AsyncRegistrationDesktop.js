import Async from '../../../App/components/Async'

export const AsyncRegistrationDesktop = Async({
  loader: () => import(/* webpackChunkName: "registration_desktop" */ './index')
})

export default AsyncRegistrationDesktop
