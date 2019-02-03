import * as React from 'react'
import renderer from 'react-test-renderer'

import Vchange from '../'

it('renders correctly', () => {
  const tree = renderer.create(<Vchange />).toJSON()
  expect(tree).toMatchSnapshot()
})
