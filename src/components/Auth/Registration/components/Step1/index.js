import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'

const Step1 = ({ classes }) => (
  <div className={classes.root}>
    <form action="/" className={classes.registrStep1}>
      <h1 className={classes.step1Title}>Registration</h1>
      <label htmlFor="email" className={classes.step1Label}>E-mail</label>
      <InputField
        id="email"
        className={classes.field}
        name="email"
        type="email"
        placeholder="Enter E-mail"
      />
      <label htmlFor="password" className={classes.step1Label}>Pass</label>
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
      />
      <div>
        <button className={classes.step1BtnBack}>Back</button>
        <button className={classes.step1BtnsRegister}>Register!</button>
      </div>
    </form>
  </div>
)

export default withStyles(styles)(Step1)