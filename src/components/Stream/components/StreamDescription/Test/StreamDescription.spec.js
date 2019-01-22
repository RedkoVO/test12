import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamDescription from '../'

it('renders correctly', () => {
  const tree = renderer.create(<StreamDescription />).toJSON()
  expect(tree).toMatchSnapshot()
})
