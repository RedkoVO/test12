import * as React from 'react'
import renderer from 'react-test-renderer'

import PricesSell from '../'

const pricesSellData = [
  { id: 1, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 2, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 3, price: '3752.22', ammount: '1.0000', total: '3752.2200000' },
  { id: 4, price: '3752.22', ammount: '1.0000', total: '3752.2200000' }
]

it('<PricesSell /> renders correctly', () => {
  const tree = renderer
    .create(<PricesSell pricesSellData={pricesSellData} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
