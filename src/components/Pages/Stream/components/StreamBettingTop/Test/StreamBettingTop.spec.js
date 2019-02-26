import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamBettingTop from '../'

it('renders correctly', () => {
  const tree = renderer.create(<StreamBettingTop />).toJSON()
  expect(tree).toMatchSnapshot()
})
