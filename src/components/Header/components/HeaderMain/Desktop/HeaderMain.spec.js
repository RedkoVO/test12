import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import HeaderMain from './'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <HeaderMain handleLogout={() => {}} balance={{}} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
