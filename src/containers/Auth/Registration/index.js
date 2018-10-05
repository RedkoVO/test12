import compose from 'recompose/compose'
import pure from 'recompose/compose'
import withProps from 'recompose/withProps'

import AsyncRegistrationDesktop from '../../../components/Auth/Registration/Desktop/AsyncRegistrationDesktop'

export default compose(
  pure,
  withProps({
    isFastRegistration: false
  })
)(AsyncRegistrationDesktop)