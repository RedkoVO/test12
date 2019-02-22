import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import CatalogItem from '../'

const game = {
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
}

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <CatalogItem game={game} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
