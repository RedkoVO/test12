import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Footer from '../'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Footer />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
