import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import RollTopDesktop from '../'

it('renders correctly Desktop', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <RollTopDesktop imgMain={'image'} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
