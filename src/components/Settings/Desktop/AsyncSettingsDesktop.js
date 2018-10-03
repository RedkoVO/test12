import Async from '../../App/components/Async'

export const AsyncSettingsDesktop = Async({
  loader: () => import(/* webpackChunkName: "settings_desktop" */ './index')
})

export default AsyncSettingsDesktop
