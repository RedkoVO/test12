import Async from '../../components/App/components/Async'

export const AsyncHeader = Async({
  loader: () => import(/* webpackChunkName: "header_block" */ './index')
})

export default AsyncHeader
