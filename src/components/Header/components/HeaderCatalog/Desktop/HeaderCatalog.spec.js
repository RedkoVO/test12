import * as React from 'react'
import renderer from 'react-test-renderer'

import HeaderStream from './'

it('renders correctly', () => {
  const tree = renderer.create(<HeaderStream />).toJSON()
  expect(tree).toMatchSnapshot()
})
