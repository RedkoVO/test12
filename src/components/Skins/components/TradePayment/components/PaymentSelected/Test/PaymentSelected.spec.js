import * as React from 'react'
import renderer from 'react-test-renderer'

import PaymentSelected from '../'

const selectedItems = [
  { id: 1, title: 'Good EWeapon 1.2', cost: '$12.20' },
  { id: 2, title: 'Good EWeapon 1.2', cost: '$12.20' },
  { id: 3, title: 'Good EWeapon 1.2', cost: '$12.20' },
  { id: 4, title: 'Good EWeapon 1.2', cost: '$12.20' },
  { id: 5, title: 'Good EWeapon 1.2', cost: '$12.20' },
  { id: 6, title: 'Good EWeapon 1.2', cost: '$12.20' }
]

it('renders correctly', () => {
  const tree = renderer
    .create(<PaymentSelected selectedItems={selectedItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
