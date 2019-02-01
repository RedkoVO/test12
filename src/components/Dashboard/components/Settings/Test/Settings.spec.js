import * as React from 'react'
import renderer from 'react-test-renderer'

import Settings from '../'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Settings handleSubscribeCheckbox={() => {}} isSubscribeCheckbox={true} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
