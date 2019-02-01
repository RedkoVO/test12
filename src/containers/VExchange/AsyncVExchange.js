import Async from '../../components/App/components/Async'

export const AsyncVExchange = Async({
  loader: () => import(/* webpackChunkName: "vexchange_page" */ './index')
})

export default AsyncVExchange
