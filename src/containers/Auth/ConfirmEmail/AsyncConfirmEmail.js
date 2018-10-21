import Async from '../../../components/App/components/Async'

export const AsyncConfirmEmail = Async({
  loader: () => import(/* webpackChunkName: "confirm_email_page" */ './index')
})

export default AsyncConfirmEmail
