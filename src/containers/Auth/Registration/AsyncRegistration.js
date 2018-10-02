import Async from '../../../components/Async'

export const AsyncRegistration = Async({
  loader: () => import(/* webpackChunkName: "registration_page" */ './index')
})

export default AsyncRegistration
