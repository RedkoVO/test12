import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import withStyles from '@material-ui/core/styles/withStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import cn from 'classnames'

import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'
import './datePickerStyle.css'

const Step2 = ({ classes }) => (
  <div className={classes.root}>
    <form action="#" className={classes.registrStep2}>
      <h1 className={classes.step2Title}>KYC Registration</h1>
      <span className={classes.pageNum}>2 of 3</span>
      <label htmlFor="firstName" className={classes.step2Label}>
        <span>First Name</span>
        <InputField
          id="firstName"
          className={classes.firstNameField}
          name="fistName"
          type="text"
          placeholder="First name"
        />
      </label>
      <label htmlFor="lastName" className={classes.step2Label}>
        <span>Last Name</span>
        <InputField
          id="lastName"
          className={classes.lastNameField}
          name="lastName"
          type="text"
          placeholder="Last name"
        />
      </label>
      <label className={classes.step2Label} htmlFor="gender">
        <span>Gender</span>

        <Select
          id="gender"
          className={cn(classes.genderField, classes.dropdown)}
          name="gender"
          value={""}
        // onChange={this.handleChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </label>
      <label className={classes.step2Label} htmlFor="birth">
        <span>Date of Birth</span>

        <div className={classes.birthWrap}>
          <DatePicker
            selected={moment()}
          // onChange={this.handleChange}
          />
        </div>
      </label>
      <label className={classes.step2Label} htmlFor="country">
        <span>Country</span>

        <Select
          id="country"
          className={cn(classes.countryField, classes.dropdown)}
          name="dropdown"
          value={"ukraine"}
        // onChange={this.handleChange}
        >
          <MenuItem value={'ukraine'}>Ukraine</MenuItem>
          <MenuItem value={'USA'}>USA</MenuItem>
        </Select>
      </label>
      <label className={classes.step2Label} htmlFor="address">
        <span>Country</span>
        <InputField
          id="address"
          className={classes.addressField}
          name="address"
          type="text"
          placeholder="34, street Palmova, Kyiv"
        />
      </label>
      <label className={classes.step2Label} htmlFor="phone">
        <span>Country</span>
        <InputField
          id="phone"
          className={classes.phoneField}
          name="lastName"
          type="text"
          placeholder="+380( _ _ ) - _ _ _ - _ _  - _ _"
        />
      </label>

      <div className={classes.step2Btns}>
        <input type="button" className={classes.step2BtnSkip} value="Skip" />
        <input type="button" className={classes.step2BtnsNext} value="Next" />
      </div>
    </form>
  </div>
)

export default withStyles(styles)(Step2)