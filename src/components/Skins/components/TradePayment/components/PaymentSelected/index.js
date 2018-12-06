import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const PaymentSelected = ({ classes, selectedItems }) => (
  <div className={classes.root}>
    <div className={classes.paymentSelectedTitle}>You selected 6 items:</div>
    {selectedItems.map((item, index) => (
      <div className={classes.paymentSelectedItem} key={item.id}>
        <div className={classes.selectedText}>
          {index}) {item.title} ....
        </div>
        <div className={classes.selectedPrice}>{item.cost}</div>
        <div className={classes.selectedClose} />
      </div>
    ))}
  </div>
)

PaymentSelected.propTypes = {
  classes: PropTypes.object,
  selectedItems: PropTypes.array
}

export default withStyles(styles)(PaymentSelected)
