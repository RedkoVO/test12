import Async from '../../App/components/Async'

export const AsyncStreamDesktop = Async({
  loader: () => import(/* webpackChunkName: "stream_desktop" */ './index')
})

export default AsyncStreamDesktop
