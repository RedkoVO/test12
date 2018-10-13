import Async from '../../../components/App/components/Async'

export const AsyncAuthorization = Async({
  loader: () => import(/* webpackChunkName: "authorization_page" */ './index')
})

export default AsyncAuthorization
