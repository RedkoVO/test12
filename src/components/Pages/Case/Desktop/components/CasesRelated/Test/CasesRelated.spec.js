import * as React from 'react'
import renderer from 'react-test-renderer'

import CasesRelated from '../'

import GunCase from '../../../../../../assets/images/caseX.png'

const relaredItems = [
  { id: 1, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 2, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 3, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 4, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 5, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 6, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 7, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 8, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 9, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 10, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 11, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 12, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 13, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 14, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 15, title: 'Good Weapon2 1.2', img: GunCase },
  { id: 16, title: 'Good Weapon2 1.2', img: GunCase }
]

it('renders correctly', () => {
  const tree = renderer
    .create(<CasesRelated relaredItems={relaredItems} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
