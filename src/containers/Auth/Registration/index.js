import compose from 'recompose/compose'
import { withHandlers, withState } from 'recompose'
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
  withState('isDisabledButton', 'setDisabledButton', false),
  withHandlers({
    onSubmit: ({ handleSubmit, dispatch, history, setDisabledButton, isDisabledButton }) =>
      handleSubmit(variables => {
        const data = { email: variables.email }

        if (!isDisabledButton) {
          setDisabledButton(!isDisabledButton)

          dispatch(registrationEmail(data))
            .then(res => {
              if (res.success)
                history.push('/confirmation-email')
              console.log('res', res)
            })
            .catch(err => {
              console.log('err registration:', err)
            })
        }
      })
  })
)(AsyncRegistrationDesktop)


