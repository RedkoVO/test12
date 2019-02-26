import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Skins from '../'

const tmpArrSkins = [
  {
    id: 1,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 2,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 3,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  }
]
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
    .create(
      <MemoryRouter keyLength={0}>
        <Skins
          handleLogout={() => {}}
          isDesktop={false}
          skins={tmpArrSkins}
          selectedItems={selectedItems}
        />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
