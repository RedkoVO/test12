import * as React from 'react'
import renderer from 'react-test-renderer'

import RollTopMobile from '../'

it('renders correctly Mobile', () => {
  const tree = renderer
    .create(<RollTopMobile />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
