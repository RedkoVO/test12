import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'

const FastRegistration = () => (
  <React.Fragment>
    <div>FastRegistration</div>
    <InputField
      name="login"
      type="text"
      placeholder="e-mail"
    />
  </React.Fragment>
)

export default withStyles(styles)(FastRegistration)