import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form } from 'redux-form'
import cn from 'classnames'

// import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'

const Step1 = ({
  classes,
  generatedKey,
  onSubmit,
  handleSaveSecretKey,
  handleGenerateSecretKey,
  isDisabledButton
}) => (
  <div className={classes.root}>
    <Form className={classes.registrStep1} onSubmit={onSubmit}>
      <h1 className={classes.step1Title}>Registration</h1>
      {generatedKey && (
        <React.Fragment>
          <div className={classes.step1Label}>Vault ID:</div>
          {generatedKey}
        </React.Fragment>
      )}

      {/* <label htmlFor="password" className={classes.step1Label}>
        Password
      </label>
      <Field
        id="password"
        name="password"
        type="password"
        className={classes.field}
        component={InputField}
        placeholder="Password"
      />
      <label htmlFor="repeat password" className={classes.step1Label}>
        Repeat password
      </label>
      <Field
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        className={classes.field}
        component={InputField}
        placeholder="Password"
      /> */}

      <button
        className={classes.step1BtnsGeneration}
        onClick={() => handleGenerateSecretKey()}
      >
        Generate
      </button>
      <button
        className={classes.step1BtnsSave}
        onClick={() => handleSaveSecretKey()}
      >
        Save key
      </button>
      <div>
        <Link to={'/login'} className={classes.step1BtnBack}>
          Login
        </Link>
        <button
          type="submit"
          className={cn(classes.step1BtnsRegister, {
            disabled: isDisabledButton
          })}
        >
          Register!
        </button>
      </div>
    </Form>
  </div>
)

Step1.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  generatedKey: PropTypes.string,
  handleSaveSecretKey: PropTypes.func,
  handleGenerateSecretKey: PropTypes.func,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Step1)
