import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import PaymentSelected from './components/PaymentSelected/'
import PaymentCard from './components/PaymentCard/'

import VisaLogo from '../../../../assets/images/visa.png'
import BitcnpayLogo from '../../../../assets/images/bitcnpay.png'
import AgspayLogo from '../../../../assets/images/agspay.png'

import styles from './styles'

const TradePayment = ({ classes, selectedItems }) => (
  <div className={classes.root}>
    <div className={classes.paymentTitle}>Choose the way to cash out:</div>
    <div className={classes.paymentWay}>
      <div className={cn(classes.paymentWayItem, classes.paymentSelectItem)}>
        <div className={classes.paymentWayItemImg}>
          <img src={VisaLogo} alt="" />
        </div>
        <div className={classes.paymentWayItemName}>Credit Card</div>
        <div
          className={cn(classes.paymentWayItemUnderline, classes.selected)}
        />
      </div>
      <div className={classes.paymentWayItem}>
        <div className={classes.paymentWayItemImg}>
          <img src={BitcnpayLogo} alt="" />
        </div>
        <div className={classes.paymentWayItemName}>Bitcoin</div>
        <div className={classes.paymentWayItemUnderline} />
      </div>
      <div className={classes.paymentWayItem}>
        <div className={classes.paymentWayItemImg}>
          <img src={AgspayLogo} alt="" />
        </div>
        <div className={classes.paymentWayItemName}>CryptaurCoin</div>
        <div className={classes.paymentWayItemUnderline} />
      </div>
    </div>

    <PaymentCard />
    <PaymentSelected selectedItems={selectedItems} />

    <div className={classes.paymentAmmount}>
      <div className={classes.paymentAmmountText}>Total ammount: </div>
      <div className={classes.paymentAmmountFill} />
      <div className={classes.paymentAmmountPrice}>$67.45</div>
    </div>
    <div className={classes.paymentBonus}>
      <input
        type="checkbox"
        className={classes.paymentBonusCheck}
        id="paymentBonusCheck"
      />
      <label
        htmlFor="paymentBonusCheck"
        className={classes.paymentBonusCheckLabel}
      >
        Yes, I have a bonus code!
      </label>
    </div>
    <div className={classes.paymentInputWrap4}>
      <input
        type="text"
        className={classes.paymentBonusInput}
        placeholder="Enter Your Bonus Code"
      />
    </div>
    <div className={classes.paymentBtn}>CASHOUT</div>
  </div>
)

TradePayment.propTypes = {
  classes: PropTypes.object,
  selectedItems: PropTypes.array
}

export default withStyles(styles)(TradePayment)
