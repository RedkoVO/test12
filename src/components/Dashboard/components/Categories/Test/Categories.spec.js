import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Categories from '../'

const data = [
  {
    id: 1,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: '4Clover',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Dice games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 4,
        title: 'For children',
        name: 'Funny games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 5,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 6,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      }
    ]
  },
  {
    id: 2,
    game: [
      {
        id: 1,
        title: 'Most popular',
        name: 'Loto games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 2,
        title: 'Most popular',
        name: 'Dice games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 3,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 4,
        title: 'For children',
        name: 'Funny games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 5,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      },
      {
        id: 6,
        title: 'For children',
        name: 'Word games',
        img: 'CloverLogo1',
        bundle: '4clover'
      }
    ]
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Categories categories={data} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
