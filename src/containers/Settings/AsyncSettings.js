import Async from '../../components/App/components/Async'

export const AsyncSettings = Async({
  loader: () => import(/* webpackChunkName: "settings_page" */ './index')
})

export default AsyncSettings
