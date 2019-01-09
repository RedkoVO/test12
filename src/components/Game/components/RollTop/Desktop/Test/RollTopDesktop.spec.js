import * as React from 'react'
import renderer from 'react-test-renderer'

import RollTopDesktop from '../'

it('renders correctly Desktop', () => {
  const tree = renderer
    .create(<RollTopDesktop imgMain={'image'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
