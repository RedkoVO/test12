import compose from 'recompose/compose'
import { withHandlers } from 'recompose'
import { reduxForm } from 'redux-form'
import validate from './validate'

import { registrationEmail } from '../../../redux/actions/auth'

import AsyncRegistrationDesktop from '../../../components/Auth/Registration/Desktop/AsyncRegistrationDesktop'

const FORM_NAME = 'registration'

export default compose(
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch }) =>
      handleSubmit(variables => {
        const data = { email: variables.email }

        dispatch(registrationEmail(data))
          .then(res => {
            console.log('res', res)
          })
          .catch(err => {
            console.log('err registration:', err)
          })
      })
  })
)(AsyncRegistrationDesktop)


