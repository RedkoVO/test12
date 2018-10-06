import Async from '../../App/components/Async'

export const AsyncHeaderDesktop = Async({
  loader: () => import(/* webpackChunkName: "header_desktop" */ './index')
})

export default AsyncHeaderDesktop
