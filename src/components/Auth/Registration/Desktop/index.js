import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import FastRegistration from '../components/FastRegistration/AsyncFastRegistration'
import KYCRegistration from '../components/KYCRegistration/AsyncKYCRegistration'

import styles from './styles'

const Registration = ({ classes, isFastRegistration }) => (
  <React.Fragment>
    {isFastRegistration ?
      <FastRegistration />
      :
      <KYCRegistration />
    }
  </React.Fragment>
)

export default withStyles(styles)(Registration)