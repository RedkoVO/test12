import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const PaymentCard = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.paymentCardTitle}>Cashout on my Credit card:</div>
    <div className={classes.paymentInputWrap}>
      <input
        type="text"
        className={classes.paymentCardNum}
        placeholder="Card Number"
      />
    </div>
    <div className={classes.paymentInputWrap2}>
      <input
        type="text"
        className={classes.paymentCardHolder}
        placeholder="Card Holder"
      />
    </div>

    <div className={classes.paymentCardMonth}>MM</div>
    <div className={classes.paymentCardYear}>YYYY</div>
    <div className={classes.paymentInputWrap3}>
      <input type="text" className={classes.paymentCardCvc} placeholder="CVC" />
    </div>
  </div>
)

PaymentCard.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(PaymentCard)
