import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import { shortBalance } from '../../../../utils/math'

import Action from './components/Action'

import styles from './styles'

const Wallet = ({
  classes,
  onSubmit,
  allBalanceResult = {},
  addressKey,
  isDisabledButton,
  handleChangeBalance,
  curencySelectValue = ''
}) => (
  <div className={classes.root}>
    <div className={classes.wallet}>
      <div className={classes.walletTitle}>
        <p>My dcb wallet:</p>
      </div>
      <div className={classes.walletAddress}>{addressKey}</div>
      <Select
        className={classes.selectCurency}
        value={curencySelectValue}
        onChange={e => handleChangeBalance(e)}
        IconComponent={props => (
          <i {...props} className={classes.curencyIcon} />
        )}
        inputProps={{
          id: 'curencyDropdownWallet',
          name: 'curency'
        }}
        SelectDisplayProps={{ className: classes.selectField }}
        MenuProps={{ classes: { paper: classes.dropdownStyle } }}
      >
        {Object.keys(allBalanceResult).map(item => (
          <MenuItem value={allBalanceResult[item].currency} key={item}>
            <div className={classes.curency}>
              {allBalanceResult[item].currency}
            </div>
            {shortBalance(allBalanceResult[item].balance)}
          </MenuItem>
        ))}
      </Select>
      <ul className={classes.walletNav}>
        <li>
          <a href="/" className={classes.walletNavItem}>
            Send Money
          </a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>
            Tranfer Money
          </a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>
            Invoice
          </a>
        </li>
        <li>
          <a href="/" className={classes.walletNavItem}>
            Cashout
          </a>
        </li>
      </ul>
    </div>

    <Action onSubmit={onSubmit} isDisabledButton={isDisabledButton} />
  </div>
)

Wallet.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func,
  allBalanceResult: PropTypes.object,
  addressKey: PropTypes.string,
  isDisabledButton: PropTypes.bool,
  handleChangeBalance: PropTypes.func,
  curencySelectValue: PropTypes.string
}

export default withStyles(styles)(Wallet)
