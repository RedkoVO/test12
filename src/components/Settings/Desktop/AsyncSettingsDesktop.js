import Async from '../../Async'

export const AsyncSettingsDesktop = Async({
  loader: () => import(/* webpackChunkName: "settings_desktop" */ './index')
})

export default AsyncSettingsDesktop
