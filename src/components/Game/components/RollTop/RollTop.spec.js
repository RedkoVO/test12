import * as React from 'react'
import renderer from 'react-test-renderer'

import RollTop from './'

it('renders correctly', () => {
  const tree = renderer.create(<RollTop imgMain={'image'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
