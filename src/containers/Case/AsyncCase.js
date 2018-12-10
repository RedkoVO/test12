import Async from '../../components/App/components/Async'

export const AsyncCase = Async({
  loader: () => import(/* webpackChunkName: "case_page" */ './index')
})

export default AsyncCase
