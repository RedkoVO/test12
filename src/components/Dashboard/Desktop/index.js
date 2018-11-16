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
  onSubmit
}) => {
  console.log('balance', balance)

  return (
    <main>
      <div className={classes.root}>
        <Wallet
          onSubmit={onSubmit}
          isDisabledButton={isDisabledButton}
          balance={balance && balance.shortBalance}
        />
        <Transaction transactions={transactions} />
        <BestAd bestAds={bestAds} />
        <Categories categories={gameCategories} />
      </div>
    </main>
  )
}

Dashboard.propTypes = {
  classNamees: PropTypes.object,
  transactions: PropTypes.array,
  bestAds: PropTypes.array,
  gameCategories: PropTypes.array
}

export default withStyles(styles)(Dashboard)
