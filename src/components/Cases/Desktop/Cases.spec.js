import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Cases from './'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <Cases />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
