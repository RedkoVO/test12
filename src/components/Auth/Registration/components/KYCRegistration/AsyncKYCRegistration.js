import Async from '../../../../App/components/Async'

export const AsyncKYCRegistration = Async({
  loader: () => import(/* webpackChunkName: "kyc_registration" */ './index')
})

export default AsyncKYCRegistration
