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
  addressKey,
  handleChangeBalance,
  curencySelectValue
}) => {
  console.log('curencySelectValue', curencySelectValue)
  return (
  <main>
    <div className={classes.root}>
      <Wallet
        onSubmit={onSubmit}
        addressKey={addressKey}
        isDisabledButton={isDisabledButton}
        balance={balance && balance.shortBalance}
        handleChangeBalance={handleChangeBalance}
        curencySelectValue={curencySelectValue}
      />
      <Transaction transactions={transactions} />
      <BestAd bestAds={bestAds} />
      <Categories categories={gameCategories} />
    </div>
  </main>
)}

Dashboard.propTypes = {
  classes: PropTypes.object,
  transactions: PropTypes.array,
  bestAds: PropTypes.array,
  gameCategories: PropTypes.array,
  balance: PropTypes.object,
  isDisabledButton: PropTypes.bool,
  onSubmit: PropTypes.func,
  addressKey: PropTypes.string,
  handleChangeBalance: PropTypes.func, //TODO: test
  curencySelectValue: PropTypes.string //TODO: test
}

export default withStyles(styles)(Dashboard)
