import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamTabsNav from '../'

it('renders correctly', () => {
  const tree = renderer.create(<StreamTabsNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
