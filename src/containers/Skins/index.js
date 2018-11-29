import compose from 'recompose/compose'
import { withProps, pure } from 'recompose'

import AsyncSkinsDesktop from '../../components/Skins/Desktop/AsyncSkinsDesktop'

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

export default compose(
  withProps(() => ({ skins: tmpArrSkins })),
  pure
)(AsyncSkinsDesktop)
