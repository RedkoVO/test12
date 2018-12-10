import Async from '../../App/components/Async'

export const AsyncCaseDesktop = Async({
  loader: () => import(/* webpackChunkName: "case_desktop" */ './index')
})

export default AsyncCaseDesktop
