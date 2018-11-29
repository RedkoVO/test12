import Async from '../../App/components/Async'

export const AsyncFooterDesktop = Async({
  loader: () => import(/* webpackChunkName: "footer_desktop" */ './index')
})

export default AsyncFooterDesktop
