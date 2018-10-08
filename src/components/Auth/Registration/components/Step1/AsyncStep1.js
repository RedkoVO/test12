import Async from '../../../../App/components/Async'

export const AsyncStep1 = Async({
  loader: () => import(/* webpackChunkName: "step1_registration" */ './index')
})

export default AsyncStep1
