import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamScreen from '../'

it('renders correctly', () => {
  const tree = renderer.create(<StreamScreen />).toJSON()
  expect(tree).toMatchSnapshot()
})
