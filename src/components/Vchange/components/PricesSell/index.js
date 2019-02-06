import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const PricesSell = ({ classes, pricesSellData }) => (
  <div className={classes.root}>
    <div className={classes.title}>
      <span>Sell</span> BTC: Prices
    </div>

    <table className={classes.wrTable} cellSpacing="0">
      <tbody>
        <tr>
          <th>Price (USDT)</th>
          <th>Ammount (BTC)</th>
          <th>Total (USDT)</th>
        </tr>
        {pricesSellData.map(item => (
          <tr className={classes.wrItem} key={item.id}>
            <td>{item.price}</td>
            <td>{item.ammount}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

PricesSell.propTypes = {
  pricesSellData: PropTypes.array
}

export default withStyles(styles)(PricesSell)
