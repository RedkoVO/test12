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
  curencySelectValue = {}
}) => (
  <div className={classes.root}>
    <div className={classes.wallet}>
      <div className={classes.walletTitle}>
        <p>My Vault:</p>
      </div>
      <div className={classes.walletAddress}>{addressKey}</div>
      <Select
        className={classes.selectCurency}
        value={curencySelectValue.currency ? curencySelectValue.currency : ''}
        onChange={e => handleChangeBalance(e.target.value)}
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
          <div
            className={classes.walletNavItem}
            onClick={() => handleChangeBalance('DCB')}
          >
            DCB
          </div>
        </li>
        <li>
          <div
            className={classes.walletNavItem}
            onClick={() => handleChangeBalance('USD')}
          >
            USD
          </div>
        </li>
        <li>
          <div
            className={classes.walletNavItem}
            onClick={() => handleChangeBalance('EUR')}
          >
            EUR
          </div>
        </li>
        <li>
          <div
            className={classes.walletNavItem}
            onClick={() => handleChangeBalance('CPT')}
          >
            CPT
          </div>
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
  curencySelectValue: PropTypes.object
}

export default withStyles(styles)(Wallet)
