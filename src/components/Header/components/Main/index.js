import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Action from './components/Action'

import Avatar from '../../../../assets/images/user_photo.png'

import styles from './styles'

const Main = ({ classes, onSubmit, balance, isDisabledButton }) => (
  <div className={classes.root}>
    <div className={classes.demoTitle}>
      DEMO VERSION
    </div>
    <div className={classes.user}>
      <div className={classes.userBlock}>
        <p className={classes.userHello}> Hello, Ben A <br />
          <span className={classes.userVerification}>KYC VERIFICATED</span>
        </p>
        <div className={classes.userPhoto}>
          <img src={Avatar} alt="" />
        </div>
      </div>
    </div>

    <div className={classes.wallet}>
      <div className={classes.walletTitle}>
        <p>My dcb wallet:</p>
      </div>
      <div className={classes.walletSum}>
        <a href="/">{balance}</a>
      </div>
      <ul className={classes.walletNav}>
        <li>
          <a href="/" className={classes.walletNavItem}>Send Money</a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>Tranfer Money</a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>Invoice</a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>Cashout</a>
        </li>
      </ul>
    </div>

    <Action onSubmit={onSubmit} isDisabledButton={isDisabledButton} />
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  balance: PropTypes.string,
  isDisabledButton: PropTypes.bool
}

export default withStyles(styles)(Main)