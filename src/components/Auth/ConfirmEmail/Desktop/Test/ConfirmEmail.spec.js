import * as React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import ConfirmEmail from '../'

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter keyLength={0}>
      <ConfirmEmail
        onSubmit={() => { }}
        isDisabledButton={false}
      />
    </MemoryRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})