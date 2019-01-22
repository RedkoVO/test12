import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import CategoriesItem from '../'

const data = {
  id: 1,
  title: 'Most popular',
  name: '4Clover',
  img: 'CloverLogo1',
  bundle: '4clover'
}

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <CategoriesItem game={data} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
