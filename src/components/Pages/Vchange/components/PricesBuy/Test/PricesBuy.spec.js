import * as React from 'react'
import renderer from 'react-test-renderer'

import PricesBuy from '../'

const pricesBuyData = [
  { id: 1, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 2, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 3, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 4, price: '3752.22', ammount: '1.0000', total: '3752.2200000' }
]

it('<PricesBuy /> renders correctly', () => {
  const tree = renderer
    .create(<PricesBuy pricesBuyData={pricesBuyData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
