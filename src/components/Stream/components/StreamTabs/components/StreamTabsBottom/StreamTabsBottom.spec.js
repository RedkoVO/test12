import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamTabsBottom from './'

it('renders correctly', () => {
  const tree = renderer.create(<StreamTabsBottom />).toJSON()
  expect(tree).toMatchSnapshot()
})
