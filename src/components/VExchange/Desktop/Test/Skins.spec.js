import * as React from 'react'
import renderer from 'react-test-renderer'

import VExchange from '../'

it('renders correctly', () => {
  const tree = renderer.create(<VExchange />).toJSON()
  expect(tree).toMatchSnapshot()
})
