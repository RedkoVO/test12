import Async from '../../components/App/components/Async'

export const AsyncCases = Async({
  loader: () => import(/* webpackChunkName: "cases_page" */ './index')
})

export default AsyncCases
