import * as React from 'react'
import renderer from 'react-test-renderer'

import CasesFilter from '../'

it('renders correctly', () => {
  const tree = renderer.create(<CasesFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})
