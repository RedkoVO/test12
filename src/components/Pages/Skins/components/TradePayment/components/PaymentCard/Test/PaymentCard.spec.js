import * as React from 'react'
import renderer from 'react-test-renderer'

import PaymentSelected from '../'

it('renders correctly', () => {
  const tree = renderer
    .create(<PaymentSelected />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
