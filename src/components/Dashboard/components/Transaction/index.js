import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import styles from './styles'

const Transaction = ({ classes, transactions }) => (
  <div className={classes.root}>
    <div className={classes.transactionsTitle}> Transactions</div>
    <div className={classes.transactionsTable}>
      <div className={cn(classes.tableHead, classes.tableRow)}>
        <div className={cn(classes.tableData, classes.col1)}>to address:</div>
        <div className={cn(classes.tableData, classes.col2)}>ammount:</div>
        <div className={cn(classes.tableData, classes.col3)}>status:</div>
        <div className={cn(classes.tableData, classes.col4)}>date/time:</div>
      </div>
      <div className={classes.tableWrapper} id="table-scroll" tabIndex="5000">
        <div className={classes.tableContentWrap}>
          {transactions.map(item => (
            <div className={classes.tableRow} key={item.id}>
              <div className={cn(classes.tableData, classes.col1, classes.icon1)}><span>{item.address}</span></div>
              <div className={cn(classes.tableData, classes.col2, classes.icon2)}><span>{item.amount}</span></div>
              <div className={cn(classes.tableData, classes.col3, classes.icon3)}><span>{item.status}</span></div>
              <div className={cn(classes.tableData, classes.col4, classes.icon4)}>
                <time dateTime="2018-02-12 13:30">{item.time}</time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={classes.tableBtns}>
      <a href="/" className={classes.receivedBtn}>Received</a>
      <a href="/" className={classes.sentBtn}>Sent</a>
    </div>
  </div>
)

Transaction.propTypes = {
  classNamees: PropTypes.object,
  transactions: PropTypes.array
}

export default withStyles(styles)(Transaction)