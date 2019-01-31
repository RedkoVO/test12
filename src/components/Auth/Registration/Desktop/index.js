import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Step1 from '../components/Step1/AsyncStep1'
// import Step2 from '../components/Step2/AsyncStep2'
// import Step3 from '../components/Step3/AsyncStep3'

import styles from './styles'

const Registration = ({
  classes,
  onSubmit,
  handleGenerateSecretKey,
  handleSaveSecretKey,
  generatedKey
}) => (
  <div className={classes.root}>
    <div className={classes.containerRegistrat}>
      <Step1
        onSubmit={onSubmit}
        handleGenerateSecretKey={handleGenerateSecretKey}
        handleSaveSecretKey={handleSaveSecretKey}
        generatedKey={generatedKey}
      />
      {/* <Step2 />
      <Step3 /> */}

      <div className={classes.footer}>
        <span className={classes.copyright}>
          Vault. All Rights Reserved 2018
        </span>
        <div>
          <a href="/" className={classes.footerLink}>
            Privacy Policy
          </a>
          <a href="/" className={classes.footerLink}>
            Terms and conditions
          </a>
        </div>
      </div>
    </div>
  </div>
)

Registration.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  generatedKey: PropTypes.string,
  handleSaveSecretKey: PropTypes.func,
  handleGenerateSecretKey: PropTypes.func
}

export default withStyles(styles)(Registration)
