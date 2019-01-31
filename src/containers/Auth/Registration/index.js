import compose from 'recompose/compose'
import { withHandlers, withState } from 'recompose'
import { reduxForm } from 'redux-form'

import { download } from '../../../utils/downloadFiles'
import Crypto from '../../../crypto/crypto'
import validate from './validate'

// import { registrationEmail } from '../../../redux/actions/auth'

import AsyncRegistrationDesktop from '../../../components/Auth/Registration/Desktop/AsyncRegistrationDesktop'

const FORM_NAME = 'registration'

export default compose(
  reduxForm({
    form: FORM_NAME,
    validate
  }),
  withState(
    'generatedKey',
    'setGeneratedKey',
    Crypto.account.generateNewAccount().secretKey
  ),
  withHandlers({
    handleGenerateSecretKey: ({ setGeneratedKey }) => () => {
      setGeneratedKey(Crypto.account.generateNewAccount().secretKey)
    },
    handleSaveSecretKey: ({ generatedKey }) => () => {
      if (!!generatedKey) {
        download(generatedKey, 'SecretKey.txt', 'text/plain')
      }
    },
    onSubmit: ({
      handleSubmit
      // dispatch,
      // history,
      // setDisabledButton,
    }) =>
      handleSubmit(variables => {
        // const data = { email: variables.email }
        //   dispatch(registrationEmail(data))
        //     .then(res => {
        //       if (res.success) history.push('/confirmation-email')
        //       console.log('res', res)
        //     })
        //     .catch(err => {
        //       console.log('err registration:', err)
        //     })
      })
  })
)(AsyncRegistrationDesktop)
