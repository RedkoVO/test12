import * as React from 'react'
import renderer from 'react-test-renderer'

import TradeSkins from './'

const skinsArr = [
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
  },
  {
    id: 4,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 5,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 6,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 7,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 8,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 9,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 10,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 11,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  },
  {
    id: 12,
    title: 'Gun: Good Weapon2 1.2',
    cost: '$11.10 FN',
    discountsCost: '$12.30'
  }
]

it('renders correctly', () => {
  const tree = renderer.create(<TradeSkins skins={skinsArr} />).toJSON()
  expect(tree).toMatchSnapshot()
})
