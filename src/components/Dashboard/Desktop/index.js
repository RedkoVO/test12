import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import TransactionHistory from '../../../containers/TransactionHistory/AsyncTransactionHistory'
import BestAd from '../components/BestAd'
import Categories from '../components/Categories'
import Wallet from '../components/Wallet'
import Contacts from '../components/Contacts'
import Settings from '../components/Settings'

import styles from './styles'

const Dashboard = ({
  classes,
  bestAds,
  gameCategories,
  allBalance,
  isDisabledButton,
  onSubmit,
  onCopyKey,
  addressKey,
  handleChangeBalance,
  handleSubscribeCheckbox,
  isSubscribeCheckbox,
  curencySelectValue
}) => (
  <main>
    <div className={classes.root}>
      <Wallet
        onSubmit={onSubmit}
        onCopyKey={onCopyKey}
        addressKey={addressKey}
        isDisabledButton={isDisabledButton}
        allBalanceResult={allBalance && allBalance.result}
        handleChangeBalance={handleChangeBalance}
        curencySelectValue={curencySelectValue}
      />
      <TransactionHistory
        addressKey={addressKey}
        currency={curencySelectValue}
      />
      <BestAd bestAds={bestAds} />
      <Categories categories={gameCategories} />
      <Contacts />
      <Settings
        handleSubscribeCheckbox={handleSubscribeCheckbox}
        isSubscribeCheckbox={isSubscribeCheckbox}
      />
    </div>
  </main>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  bestAds: PropTypes.array,
  gameCategories: PropTypes.array,
  allBalance: PropTypes.object,
  isDisabledButton: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCopyKey: PropTypes.func,
  addressKey: PropTypes.string,
  handleChangeBalance: PropTypes.func,
  handleSubscribeCheckbox: PropTypes.func,
  isSubscribeCheckbox: PropTypes.bool,
  curencySelectValue: PropTypes.object
}

export default withStyles(styles)(Dashboard)
