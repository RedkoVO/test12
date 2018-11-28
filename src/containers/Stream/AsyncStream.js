import Async from '../../components/App/components/Async'

export const AsyncStream = Async({
  loader: () => import(/* webpackChunkName: "stream_page" */ './index')
})

export default AsyncStream
