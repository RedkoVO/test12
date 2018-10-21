import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, Form } from 'redux-form'
import cn from 'classnames'

import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'

const Step1 = ({ classes, onSubmit, isDisabledButton }) => (
  <div className={classes.root}>
    <Form className={classes.registrStep1} onSubmit={onSubmit}>
      <h1 className={classes.step1Title}>Registration</h1>
      <label htmlFor="email" className={classes.step1Label}>E-mail</label>
      <Field
        id="email"
        name="email"
        type="email"
        className={classes.field}
        component={InputField}
        placeholder="Enter E-mail"
      />
      {/* <label htmlFor="password" className={classes.step1Label}>Pass</label>
      <InputField
        id="password"
        className={classes.field}
        name="psw"
        type="password"
        placeholder="Enter Password"
      />
      <label htmlFor="pswRepeat" className={classes.step1Label}>Confirm pass</label>
      <InputField
        id="pswRepeat"
        className={classes.field}
        name="psw"
        type="password"
        placeholder="Enter Password"
      /> */}
      <div>
        <Link to={'/login'} className={classes.step1BtnBack}>Login</Link>
        <button type="submit" className={cn(classes.step1BtnsRegister, { disabled: isDisabledButton })}>Register!</button>
      </div>
    </Form>
  </div>
)

Step1.propTypes = {
  classNamees: PropTypes.object,
  onSubmit: PropTypes.func,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Step1)