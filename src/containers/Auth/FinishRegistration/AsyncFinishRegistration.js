import Async from '../../../components/App/components/Async'

export const AsyncFinishRegistration = Async({
  loader: () =>
    import(/* webpackChunkName: "finish_registration_page" */ './index')
})

export default AsyncFinishRegistration
