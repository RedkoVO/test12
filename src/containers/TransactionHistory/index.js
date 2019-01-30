import compose from 'recompose/compose'
import { lifecycle, pure } from 'recompose'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'

import { getTransactionHistorySelector } from '../../selectors/history'
import { getAllBalanceInfoSelector } from '../../selectors/balance'
import { getTransactionHistory } from '../../redux/actions/history'

import AsyncTransactionHistoryDesktop from '../../components/TransactionHistory/Desktop/AsyncTransactionHistoryDesktop'

const mapStateToProps = state => ({
  transactionHistory: getTransactionHistorySelector(state),
  allBalance: getAllBalanceInfoSelector(state)
})
export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      const { dispatch, currency, allBalance, addressKey } = this.props

      if (allBalance && allBalance.result) {
        dispatch(
          getTransactionHistory(currency.currency, addressKey, '')
        )
      }
    },
    componentDidUpdate(prevProps) {
      const { dispatch, currency, addressKey } = this.props
      if (!isEqual(prevProps.currency.currency, currency.currency)) {
        dispatch(
          getTransactionHistory(currency.currency, addressKey, '')
        )
      }
    }
  }),
  pure
)(AsyncTransactionHistoryDesktop)
