import Async from '../../../../App/components/Async'

export const AsyncStep2 = Async({
  loader: () => import(/* webpackChunkName: "step2_registration" */ './index')
})

export default AsyncStep2
