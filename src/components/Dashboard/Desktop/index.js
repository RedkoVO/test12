import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Transaction from '../components/Transaction'
import BestAd from '../components/BestAd'
import Categories from '../components/Categories'

import styles from './styles'

const Dashboard = ({
  classes,
  transactions,
  bestAds,
  gameCategories
}) => (
    <main>
      <div className={classes.root}>
        <Transaction transactions={transactions} />
        <BestAd bestAds={bestAds} />
        <Categories categories={gameCategories} />
      </div>
    </main>
  )

Dashboard.propTypes = {
  classNamees: PropTypes.object,
  transactions: PropTypes.array,
  bestAds: PropTypes.array,
  gameCategories: PropTypes.array
}

export default withStyles(styles)(Dashboard)