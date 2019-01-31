import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { Form } from 'redux-form'

// import InputField from '../../../../App/components/Form/InputField'

import RefreshIcon from '../../../../../assets/images/refresh.png'

import styles from './styles'

const Step1 = ({
  classes,
  generatedKey,
  onSubmit,
  handleSaveSecretKey,
  handleGenerateSecretKey
}) => (
  <div className={classes.root}>
    <Form className={classes.registrStep1} onSubmit={onSubmit}>
      <h1 className={classes.step1Title}>Registration</h1>
      {generatedKey && (
        <React.Fragment>
          <div className={classes.step1Label}>Vault ID:</div>
          <div className={classes.wrKey}>
            {generatedKey}
            <img
              className={classes.refresh}
              src={RefreshIcon}
              onClick={() => handleGenerateSecretKey()}
              alt=""
            />
          </div>
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
        className={classes.step1BtnsSave}
        onClick={() => handleSaveSecretKey()}
      >
        Save key
      </button>
      <div>
        <Link to={'/login'} className={classes.step1BtnBack}>
          Login
        </Link>
        <Link to={'/finish-registration'} className={classes.step1BtnsFinish}>
          Finish!
        </Link>
      </div>
    </Form>
  </div>
)

Step1.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  generatedKey: PropTypes.string,
  handleSaveSecretKey: PropTypes.func,
  handleGenerateSecretKey: PropTypes.func
}

export default withStyles(styles)(Step1)
