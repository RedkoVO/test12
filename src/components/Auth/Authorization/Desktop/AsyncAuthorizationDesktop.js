import Async from '../../../App/components/Async'

export const AsyncAuthorizationDesktop = Async({
  loader: () => import(/* webpackChunkName: "authorization_desktop" */ './index')
})

export default AsyncAuthorizationDesktop
