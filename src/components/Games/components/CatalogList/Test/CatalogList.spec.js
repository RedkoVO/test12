import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import CatalogList from '../'

const games = [
  {
    id: 1,
    title: 'Rolled-Folled',
    company: 'by Fall Inc.',
    category: 'DICE CATEGORY',
    rating: 6.5,
    online: 536,
    bigWin: 4666.78,
    volume: 167.12,
    volumeAll: 20243.12,
    rollTime: '00:00:23.12'
  },
  {
    id: 2,
    title: 'Rolled-Folled-Rolled',
    company: 'by Fall Fall Fall Fall Inc.',
    category: 'DICE DICE DICE CATEGORY',
    rating: 6.5,
    online: 536,
    bigWin: 466603.782390328,
    volume: 167434.1243434,
    volumeAll: 2024343.134342,
    rollTime: '00:00:23.12'
  },
  {
    id: 3,
    title: 'Rolled-Folled',
    company: 'by Fall Inc.',
    category: 'DICE CATEGORY',
    rating: 6.5,
    online: 536,
    bigWin: 4666.78,
    volume: 167.12,
    volumeAll: 20243.12,
    rollTime: '00:00:23.12'
  }
]

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <CatalogList games={games} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
