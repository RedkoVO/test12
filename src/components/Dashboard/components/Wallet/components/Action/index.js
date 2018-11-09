import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field, Form } from 'redux-form'
import cn from 'classnames'

import InputField from '../../../../../App/components/Form/InputField'

import styles from './styles'

const Action = ({ classes, onSubmit, isDisabledButton }) => (
  <div className={classes.root}>
    <div className={classes.actionsStatistics}>
      <span className={classes.statisticsTitle}>Statistics</span>
      <div className={classes.statisticsGraph}>
        <canvas id="cvs" width="200" height="90">
          [No canvas support]
        </canvas>
      </div>
    </div>
    <div className={classes.actionsSend}>
      <Form className={classes.form} onSubmit={onSubmit}>
        <span className={classes.sendTitle}>Send now</span>
        <div className={classes.sendAddress}>
          <Field
            name="addressKey"
            type="text"
            className={classes.sendAddressField}
            component={InputField}
            placeholder="Put address you want to send the money"
          />
        </div>
        <div className={classes.sendAmmount}>
          <Field
            name="amount"
            type="text"
            className={classes.sendAmmountField}
            component={InputField}
            placeholder="Set ammount"
          />
        </div>
        <button type="submit" className={cn(classes.sendBtn, { disabled: isDisabledButton })}>Send money</button>
      </Form>
    </div>
    <div className={classes.actionsInvoice}>
      <span className={classes.invoiceTitle}>Invoice</span>
      <div className={classes.invoiceAmmount}>
        <input type="text" className={classes.invoiceAmmountField} placeholder="Set ammount you need to receive" />
      </div>
      <a href="/" className={classes.invoiceBtn}>Generate link</a>
    </div>
  </div>
)

Action.propTypes = {
  classes: PropTypes.object,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Action)