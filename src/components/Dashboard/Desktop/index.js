import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import TransactionHistory from '../../../containers/TransactionHistory/AsyncTransactionHistory'
import BestAd from '../components/BestAd'
import Categories from '../components/Categories'
import Wallet from '../components/Wallet'

import styles from './styles'

const Dashboard = ({
  classes,
  bestAds,
  gameCategories,
  allBalance,
  isDisabledButton,
  onSubmit,
  addressKey,
  handleChangeBalance,
  curencySelectValue
}) => (
  <main>
    <div className={classes.root}>
      <Wallet
        onSubmit={onSubmit}
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
  addressKey: PropTypes.string,
  handleChangeBalance: PropTypes.func,
  curencySelectValue: PropTypes.object
}

export default withStyles(styles)(Dashboard)
