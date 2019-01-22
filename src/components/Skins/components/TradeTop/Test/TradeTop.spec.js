import * as React from 'react'
import renderer from 'react-test-renderer'

import TradeTop from '../'

it('renders correctly', () => {
  const tree = renderer.create(<TradeTop />).toJSON()
  expect(tree).toMatchSnapshot()
})
