import * as React from 'react'
import renderer from 'react-test-renderer'

import TradeSkins from './'

it('renders correctly', () => {
  const tree = renderer.create(<TradeSkins />).toJSON()
  expect(tree).toMatchSnapshot()
})
