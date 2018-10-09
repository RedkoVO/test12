import Async from '../../../../App/components/Async'

export const AsyncStep3 = Async({
  loader: () => import(/* webpackChunkName: "step3_registration" */ './index')
})

export default AsyncStep3
