import * as React from 'react'
import renderer from 'react-test-renderer'

import Contacts from '../'

it('renders correctly', () => {
  const tree = renderer.create(<Contacts />).toJSON()
  expect(tree).toMatchSnapshot()
})
