import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Transaction from '../components/Transaction'
import BestAd from '../components/BestAd'
import Categories from '../components/Categories'
import Wallet from '../components/Wallet'

import styles from './styles'

const Dashboard = ({
  classes,
  transactions,
  bestAds,
  gameCategories,
  balance,
  isDisabledButton,
  onSubmit,
  addressKey
}) => (
  <main>
    <div className={classes.root}>
      <Wallet
        onSubmit={onSubmit}
        addressKey={addressKey}
        isDisabledButton={isDisabledButton}
        balance={balance && balance.shortBalance}
      />
      <Transaction transactions={transactions} />
      <BestAd bestAds={bestAds} />
      <Categories categories={gameCategories} />
    </div>
  </main>
)

Dashboard.propTypes = {
  classes: PropTypes.object,
  transactions: PropTypes.array,
  bestAds: PropTypes.array,
  gameCategories: PropTypes.array,
  balance: PropTypes.object,
  isDisabledButton: PropTypes.bool,
  onSubmit: PropTypes.func,
  addressKey: PropTypes.string
}

export default withStyles(styles)(Dashboard)
