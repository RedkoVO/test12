import * as React from 'react'
import renderer from 'react-test-renderer'

import CaseFilter from '../'

it('renders correctly', () => {
  const tree = renderer.create(<CaseFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})
