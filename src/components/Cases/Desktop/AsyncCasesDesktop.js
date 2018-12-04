import Async from '../../App/components/Async'

export const AsyncCasesDesktop = Async({
  loader: () => import(/* webpackChunkName: "cases_desktop" */ './index')
})

export default AsyncCasesDesktop
