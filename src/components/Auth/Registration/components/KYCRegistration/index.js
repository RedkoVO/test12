import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import withStyles from '@material-ui/core/styles/withStyles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// import { Field, Form } from 'redux-form'

import InputField from '../../../../App/components/Form/InputField'

import styles from './styles'
import './datePickerStyle.css'

const KYCRegistration = ({ classes }) => (
  <form>
    <div>KYCRegistration</div>
    <InputField   // <Field ... >
      name="first_name"
      type="text"
      placeholder="First name"
    />

    <InputField   // <Field ... >
      name="last_name"
      type="text"
      placeholder="Last name"
    />

    <Select
      name="gender"
      value={""}
    // onChange={this.handleChange}
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>


    <DatePicker
      selected={moment()}
    // onChange={this.handleChange}
    />

    <Select
      name="country"
      value={""}
    // onChange={this.handleChange}
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>

    <InputField   // <Field ... >
      name="address"
      type="text"
      placeholder="Address"
    />

    <Select
      name="document"
      value={""}
    // onChange={this.handleChange}
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>

    <InputField   // <Field ... >
      name="email"
      type="email"
      placeholder="e-mail"
    />
  </form >
)

export default withStyles(styles)(KYCRegistration)