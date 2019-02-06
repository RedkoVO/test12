import compose from 'recompose/compose'
import { withProps, withHandlers, withState, pure } from 'recompose'

import VchangeDesktop from '../../components/Vchange/Desktop/'

const tmpPricesBuyData = [
  { id: 1, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 2, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 3, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 4, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 5, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 6, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 7, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 8, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 9, price: '3752.22', ammount: '1.0000', total: '3752.2200000' }
]
const tmpPricesSellData = [
  { id: 1, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 2, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 3, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 4, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 5, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 6, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 7, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 8, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 9, price: '3752.22', ammount: '1.0000', total: '3752.2200000' }
]

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
  withProps(() => ({
    pricesBuyData: tmpPricesBuyData,
    pricesSellData: tmpPricesSellData
  })),
  pure
)(VchangeDesktop)
