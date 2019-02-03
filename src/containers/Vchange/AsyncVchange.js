import Async from '../../components/App/components/Async'

export const AsyncVchange = Async({
  loader: () => import(/* webpackChunkName: "vchange_page" */ './index')
})

export default AsyncVchange
