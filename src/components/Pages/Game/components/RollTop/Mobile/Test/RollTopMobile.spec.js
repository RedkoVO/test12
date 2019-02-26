import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import RollTopMobile from '../'

it('renders correctly Mobile', () => {
  const tree = renderer
    .create(
      <MemoryRouter keyLength={0}>
        <RollTopMobile />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
