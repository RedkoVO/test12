import Async from '../../components/Async'

export const AsyncSettings = Async({
  loader: () => import(/* webpackChunkName: "settings_page" */ './index')
})

export default AsyncSettings
