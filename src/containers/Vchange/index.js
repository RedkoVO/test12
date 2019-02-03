import compose from 'recompose/compose'
import { withHandlers, withState, pure } from 'recompose'

import VchangeDesktop from '../../components/Vchange/Desktop/'

export default compose(
  withState('curencySelectFirstValue', 'setCurencySelectFirstValue', 'BTC'),
  withState('curencySelectSecondValue', 'setCurencySelectSecondValue', 'USD'),
  withHandlers({
    handleChangeFirsCurrency: ({ setCurencySelectFirstValue }) => value => {
      setCurencySelectFirstValue(value)
    },
    handleChangeSecondCurrency: ({ setCurencySelectSecondValue }) => value => {
      setCurencySelectSecondValue(value)
    }
  }),
  pure
)(VchangeDesktop)
