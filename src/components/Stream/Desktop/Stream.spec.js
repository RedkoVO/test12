import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Stream from './'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Stream handleLogout={() => {}} isDesktop={false} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
