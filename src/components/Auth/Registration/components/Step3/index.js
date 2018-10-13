import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import cn from 'classnames'

import styles from './styles'

const Step3 = ({ classes }) => (
  <div className={classes.root}>
    <form action="#" className={classes.registrStep3}>
      <h1 className={classes.step3Title}>KYC Registration</h1>
      <span className={classes.pageNum}>3 of 3</span>

      <label className={classes.step3Label} htmlFor="document">
        <span>Document</span>
        <Select
          id="document"
          className={cn(classes.docField, classes.dropdown)}
          name="dropdown"
          value={"driverLicense"}
        // onChange={this.handleChange}
        >
          <MenuItem value={'driverLicense'}>Driver License</MenuItem>
          <MenuItem value={'passport'}>Passport</MenuItem>
        </Select>
      </label>
      <label className={classes.step3Label} htmlFor="upload">
        <span>Upload the photo</span>
        <input type="file" className={classes.uploadField} id="upload" />
      </label>

      <input type="radio" className={classes.agreementField} id="agreement" />I agree with <a href="/">Terms&amp;Conditions</a> <br />
      <input type="radio" className={classes.agreementField} id="agreement2" />I agree with <a href="/">Vault Personal Infortmation Policy</a>

      <div className="step2Btns">
        <input type="button" className={classes.step2BtnSkip} value="Skip" />
        <input type="button" className={classes.step2BtnsNext} value="Next" />
      </div>
    </form>
  </div>
)

export default withStyles(styles)(Step3)