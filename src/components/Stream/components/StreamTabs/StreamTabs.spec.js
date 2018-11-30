import * as React from 'react'
import renderer from 'react-test-renderer'

import StreamTabs from './'

it('renders correctly', () => {
  const tree = renderer.create(<StreamTabs />).toJSON()
  expect(tree).toMatchSnapshot()
})
