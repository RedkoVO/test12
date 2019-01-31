import Async from '../../../App/components/Async'

export const AsyncFinishRegistrationDesktop = Async({
  loader: () =>
    import(/* webpackChunkName: "finish_registration_desktop" */ './index')
})

export default AsyncFinishRegistrationDesktop
